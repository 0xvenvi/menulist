import React from "react";
import {v4 as uuid} from 'uuid';
import './styles/cart.css';

const Cart = ({cartList, onAddtocart, deleteCartitem, onRemovetocart, cartClearance}) => {

    const totalPrice = cartList.reduce((price, item) => 
        price + (item.quantity * item.price),0);

    return(
        <div className="cart-body">
            <h1 className="cart-item-header" >Cart Items</h1>
            <div>
                {/* Check if cart is empty */}
                {cartList.length === 0 && <div>No items is added in the cart</div>}
                <div className="clearCart">

                        {cartList.length >=1 && (
                            <button
                            onClick={cartClearance}>Clear Cart</button>
                        )}
                    </div>
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
                            <p className="cart-item-name">{item.name}</p>
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

                            <div>
                                <button onClick={()=>deleteCartitem(item)}>Delete</button>

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