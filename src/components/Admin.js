import React from 'react';
import './styles/admin.css';


const Admin = ({menuarray, addnewProduct, newmenulist, setNewmenuList, deleteProduct}) => {



    
    /* -------------------------------------- Admin Center View ----------------- */
    return(


        <div>
            
            <table className='admin-center-itemlist'>
                <thead>
                    <tr>
                        <th className='id-column'>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className='add-menu-container' >
                        <td className='id-column'>
                            <p>Auto</p>
                        </td>
                        <td>
                            <input placeholder='Category'
                            value={newmenulist.category}
                            onChange={(e)=>{setNewmenuList({...newmenulist, category: e.target.value})
                            }}
                            ></input>
                        </td>
                        <td>
                            <input placeholder='Name'
                            value={newmenulist.name}
                            onChange={(e)=>setNewmenuList({...newmenulist, name: e.target.value})}
                            ></input>
                        </td>
                        <td>
                            <input placeholder='Price'
                            value={newmenulist.price}
                            type="number"
                            onChange={(e)=>setNewmenuList({...newmenulist, price: e.target.value})}
                            ></input>
                        </td>
                        <td>
                            <input placeholder='Image Link'
                            value={newmenulist.pic}
                            type="url"
                            onChange={(e)=>setNewmenuList({...newmenulist, pic: e.target.value})}
                            ></input>
                        </td>
                        <td><button className='add-menu-button'
                            onClick={addnewProduct} 
                        
                        >Add Menu</button></td>
                    </tr>

                        {menuarray.map(
                            (itemlist)=>{
                                return(
                                    <tr className='' key={itemlist.id}>
                                        
                                        <td className='id-column'>{itemlist.id}</td>
                                        <td>{itemlist.category}</td>
                                        <td>{itemlist.name.charAt(0).toUpperCase() + itemlist.name.slice(1)}</td>
                                        <td>{itemlist.price}</td>

                                        <td> <img className="admin-pic" src={itemlist.pic} alt={"Image of " + itemlist.name}/> </td>
                                        
                                        <td><button>Edit</button> 
                                        
                                        <button
                                        onClick={()=>{deleteProduct(itemlist)}}
                                        >Delete</button></td>
                                    </tr>
                                )
                            }

                        )}
                </tbody>
            


            </table>
        </div>

    )

}

export default Admin;