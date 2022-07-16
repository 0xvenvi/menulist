import React from 'react';
import './styles/admin.css';

const Admin = (props) => {

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

                    <tr className='add-menu-container'>
                        <td className='id-column'><input placeholder='ID'></input></td>
                        <td><input placeholder='Category'></input></td>
                        <td><input placeholder='Name'></input></td>
                        <td><input placeholder='Price'></input></td>
                        <td><input placeholder='Image Link'></input></td>
                        <td><button className='add-menu-button'>Add Menu</button></td>
                    </tr>

                        {props.menuarray.map(
                            (itemlist)=>{
                                return(
                                    <tr className='' key={itemlist.id}>
                                        
                                        <td className='id-column'>{itemlist.id}</td>
                                        <td>{itemlist.category}</td>
                                        <td>{itemlist.name}</td>
                                        <td>{itemlist.price}</td>

                                        <td> <img className="admin-pic" src={itemlist.pic} alt="Picture of: {itemlist.name}"/> </td>
                                        
                                        <td><button>Edit</button> 
                                        
                                        <button>Delete</button></td>
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