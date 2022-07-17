import React from "react";
import {v4 as uuid} from 'uuid';

const Cart = ({cartList, setcartList, onAddtocart, deleteCartitem, newcart, setNewcart}) => {

    const cartrow = cartList.reduce((mycart, currentCartlist)=>{

        if( mycart.indexOf(currentCartlist.id) < 0){
            mycart.push(currentCartlist.id)} 
        
        return(mycart); },[])
        console.log(cartrow);

    return(
        <div>
            <h1>Cart Items</h1>

            <div>
                {/* Check if cart is empty */}
                {cartList.length === 0 && <div>Cart is empty</div>}
            </div>

            <div>
                {cartrow.map((uniquerowid)=>{
                    return(
                        <div>
                            <div>
                            {uniquerowid}
                            </div>
                            <div>
                                {cartList
                                .filter((x)=>{
                                    return(x.id===uniquerowid)
                                })
                                .map((item)=>{
                                    return(
                                        <div className='row' key={uuid()}>
                                            <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                            <span>{item.category}</span>
                                            <span>{item.qty} x PHP{item.price}</span>
                                            <span>Total: {item.total}</span>
                                            <button className="remove"
                                                onClick={()=>{return(
                                                    deleteCartitem(item)
                                                )}}>remove</button>
                                            <button>+</button>
                                            <button>-</button>
                                            
                                        </div>
                                    )})}
                            </div>           
                        </div>
                        )

                })}

            </div>
        </div>
    )

}

export default Cart;