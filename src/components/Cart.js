import React from "react";
import {v4 as uuid} from 'uuid';
import './styles/cart.css';

const Cart = ({cartList, onAddtocart, deleteCartitem, onRemovetocart, cartClearance}) => {

    const totalPrice = cartList.reduce((price, item) => 
        price + (item.quantity * item.price),0);

    return(
        <div className="cart-body">
            <div className="cart-item-header" >
                <h2>Cart Items</h2>
                <div className="clearCart">
                    {cartList.length >=1 && (
                        <button className="clearCart-btn"
                        onClick={cartClearance}>Clear Cart</button>
                    )}
                </div>
            </div>
            <div>
                {/* Check if cart is empty */}
                {cartList.length === 0 && <div>No items is added in the cart</div>}
               
            </div>

            <div>
                <div className="cart-items-list-header">
                    <p>Picture</p>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Total</p>
                    <p>Action</p>
                </div>


                {cartList.map((item)=>{
                    return(
                        <div key={item.id} className="cart-items-list">
                            
                            <img className="cart-items-image" 
                                src={item.pic} 
                                alt={item.name} />
                            <p className="cart-item-name">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                            <div className="cart-items-quantity" >
                                <button className="cart-items-lessqty qtyadjust"
                                        onClick={()=>onRemovetocart(item)}
                                        >-</button>
                                {item.quantity}
                                <button className="cart-items-addqty qtyadjust"
                                        onClick={()=>onAddtocart(item)}>+</button>
                            </div>
                            <p className="cart-item-price">PHP {item.price}</p>

                            <p className="totalitemPrice">PHP {item.quantity * item.price} </p>

                            <div className="cart-action-container">
                                <button className="cart-action-btn" onClick={()=>deleteCartitem(item)}>Delete</button>

                            </div>




                        </div>
                    )})}

                    <div className="totalPrice">
                        <p className="totalpriceText">Total: {totalPrice}</p>
                    </div>

                    

            </div>
        </div>
    )

}

export default Cart;