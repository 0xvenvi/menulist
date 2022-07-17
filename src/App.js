import React, { useState } from "react";
import Header from './components/Header';
import './components/styles/index.css';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import {v4 as uuid} from 'uuid';





const App = () =>{


    const [menuarray, setMenuarray] = useState([
        {id:uuid(), name:"crossaint", category:"Bread & Buns", price:"200", status:false, pic:"https://cdn.kuali.com/wp-content/uploads/2004/07/16015122/croissants-wooden-cutting-board-830x552.jpg"},
        {id:uuid(), name:"pretzel", category:"Bread & Buns", price:"150", status:false, pic:"https://preppykitchen.com/wp-content/uploads/2021/02/Soft-Pretzel-Recipe-preppy-kitchen-500x375.jpg"},
        {id:uuid(), name:"mochi", category:"Cookies & Pastries", price:"250", status:false, pic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F02%2F1014786-Easy-Mochi-Photo-by-liz-650x465.jpg"},
        {id:uuid(), name:"chocolate chip cookie", category:"Cookies & Pastries", price:"100", status:false, pic:"https://handletheheat.com/wp-content/uploads/2019/02/Peanut-Butter-Chocolate-Chip-Cookies-1.jpg"},
        {id:uuid(), name:"strawberry doughnut", category:"Doughnuts", price:"100", status:false, pic:"http://www.barbaracooks.com/wp-content/uploads/2014/06/strawberry-split-donuts-2.tif.jpg"},
        {id:uuid(), name:"chocolate doughnut", category:"Doughnuts", price:"100", status:false, pic:"https://handletheheat.com/wp-content/uploads/2010/11/Baked-Chocolate-Doughnuts.jpg"},
        {id:uuid(), name:"pride cake", category:"Cakes", price:"250", status:false, pic:"https://images-gmi-pmc.edge-generalmills.com/63b528dc-8beb-4289-96e3-6d8bef0a898d.jpg"},
        {id:uuid(), name:"chocolate cake", category:"Cakes", price:"300", status:false, pic:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1043451_11-4713959.jpg"},
        {id:uuid(), name:"blueberry cake", category:"Cakes", price:"350", status:false, pic:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/11/0/FNK_Wake-and-Cake-Blueberry-Breakfast-Cake-H-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494520426604.jpeg"},
        {id:uuid(), name:"test", category:"test", price:"100", status:false, pic:"test"}
    ])

    const [newmenulist, setNewmenuList] = useState({
        id:"", name:"", category:"", price:"", status:"", pic:""

    })

    const [cartList, setcartList] = useState([])
    // const [cartitemlist, setCartitemlist] = useState([])
    const [newcart, setNewcart]=useState([])
 

    // const CART_PAGE = 'cart'
    // const [page, setPage] = useState(CART_PAGE)



/*  -------------------------------- Add to Cart --------------------------------- */

const onAddtocart = (cartitem) =>{
    console.log("Adding to cart")

    const cartEntry = {
        id:cartitem.id, 
        name:cartitem.name, 
        category:cartitem.category, 
        price:cartitem.price,
        qty: 1,
        total: cartitem.price
    }

    // const newCart = [...cartList, cartEntry]

    // const cartreduce = newCart.reduce((ourcart, currentOurcart)=>{

    //     if( ourcart.indexOf(currentOurcart.id) < 0){
    //         ourcart.push([...cartList, qty: qty + 1])} 
        
    //     return(ourcart); },[])

    setcartList([...cartList, cartEntry]);

    

    

}

const cartcount = cartList.length;






/*  -------------------------------- Delete in Cart --------------------------------- */

const deleteCartitem = (productToRemove) => {
    console.log("deleting")
    
  //filter all except that id that will be removed
  let newcart = cartList.filter( (product) => product !== productToRemove)
  console.log(newcart)
  setcartList(newcart);
}



/*  -------------------------------- Persist all changes on State --------------------------------- */







/*  -------------------------------- Add a New Product in the Menu --------------------------------- */
        const addnewProduct = () => {
            let num = menuarray.length +1;

            let newmenuEntry = {id:uuid(), 
                            name: newmenulist.name,
                            category: newmenulist.category, 
                            price: newmenulist.price,
                            status: false,
                            pic: newmenulist.pic
                        }
            // console.log(newmenuEntry);
        
            setMenuarray([...menuarray, newmenuEntry]);
            // setNewmenuList({id:"", name:"", category:"", price:"", status:"", pic:""})
        }









    //* Sort and Filter Menu per Category using map, reduce and filter--------------------------------------------------------------------------------------------------------- *//


    const MenuSection = () => {
        // Reduce the category & create an array called Section using indexOf

        const sectionCategory = menuarray.reduce( (sectionCategory, currentSection) => { 
                // Check the array, if the category is present the index is > or = 0
                if( sectionCategory.indexOf(currentSection.category) < 0){
                    sectionCategory.push(currentSection.category)} 
                    
                return(sectionCategory); },[])
                console.log(sectionCategory)

        return(
            <div className="menu-body" key={uuid()}>
                {sectionCategory.map((myCategoryList)=>{
                    return(
                        <div className="section-container" key={uuid()}>
                            {/* Section List */}
                            <h2 className="section-header">
                            {myCategoryList}
                            </h2>

                            <div className="item-card">
                            {/* Item List */}
                            {menuarray
                                // Using .map only will show all the data, thus we need the .filter which is the section
                                .filter((menuSection)=>menuSection.category === myCategoryList)
                                .map((item)=>{

                                    
                                return(
                                    <div className="item-container" key={item.id}>
                                        <img src={item.pic} alt={"Image of " + item.name}/>
                                        <span>ID: {item.id}</span>
                                        {/* <span>Category: {item.category}</span> */}
                                        <span >{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                        <span className="price" > PHP {item.price}</span>
                                        <button className="add-to-cart-btn"
                                            onClick={()=>{
                                                return(onAddtocart(item))
                                            }}
                                        >Add to cart</button>
                                    </div>
                                )})}
                            </div>

                        </div>
                    )})}
            </div>

            )}






    return(
        <div className="main-container">
            <Routes>
                <Route path={"/"}
                    element={
                        <div>
                        <div className="carticon-count">
                            {cartcount}
                        </div>
                        <MenuSection/>
                        <Cart cartList={cartList}
                            setcartList={setcartList}
                            onAddtocart={onAddtocart}
                            newcart={newcart}
                            setNewcart={setNewcart}
                            deleteCartitem = {deleteCartitem}
                            />
                        {/* <Footer/> */}
                        </div>
                    }
                />

                <Route path={"/home"}
                    element={
                        <div>
                        <div className="carticon-count">
                        {cartcount}
                        </div>
                        <MenuSection/>
                        <Cart cartList={cartList}
                            setcartList={setcartList}
                            onAddtocart={onAddtocart}
                            newcart={newcart}
                            setNewcart={setNewcart}
                            deleteCartitem = {deleteCartitem}
                            />
                        </div>
                    }
                />



                <Route path={"/admin"}
                    element={
                        <div>
                            <Admin menuarray={menuarray}
                                    addnewProduct={addnewProduct}
                                    newmenulist={newmenulist}
                                    setNewmenuList={setNewmenuList}

                                    />
                        </div>

                    }
                    
                    />


            </Routes>
        </div>

    )


}




export default App;