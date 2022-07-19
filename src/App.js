import React, { useState } from "react";
import './components/styles/index.css';
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
        {id:uuid(), name:"sourdough", category:"Bread & Buns", price:"120", status:false, pic:"https://nationaltoday.com/wp-content/uploads/2021/10/sourdough-bread-640x514.jpg"},
        {id:uuid(), name:"baguette", category:"Bread & Buns", price:"90", status:false, pic:"https://static.toiimg.com/thumb/76545839.cms?imgsize=462529&width=800&height=800"},
        {id:uuid(), name:"sliced bread", category:"Bread & Buns", price:"70", status:false, pic:"https://s.yimg.com/ny/api/res/1.2/3j.6_c0fSB.8LGotqmjrcg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://media.zenfs.com/en/myrecipes_643/a0f04c9c7ed1db1213fb9bff5e521419"},
        {id:uuid(), name:"french toast", category:"Bread & Buns", price:"110", status:false, pic:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/26/0/IE0309_French-Toast.jpg.rend.hgtvcom.616.462.suffix/1431730431340.jpeg"},
        {id:uuid(), name:"gingerbread", category:"Cookies & Pastries", price:"50", status:false, pic:"https://www.pamperedchef.com/iceberg/com/recipe/1335021-2-lg.jpg"},
        {id:uuid(), name:"cinnamon doughnut", category:"Doughnuts", price:"70", status:false, pic:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/29/0/BX0903H_cinnamon-baked-doughnuts-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1449692373072.jpeg"},
        {id:uuid(), name:"cinnamon doughnut", category:"Doughnuts", price:"70", status:false, pic:"https://i.pinimg.com/736x/82/e0/6c/82e06cb9adc1b752c6cde21e69f96345.jpg"},
    ])

    const [newmenulist, setNewmenuList] = useState({
        id:"", name:"", category:"", price:"", status:"", pic:""

    })


    const [cartList, setcartList] = useState([])
    let [cartcount, setcartCount]=useState(0)

/*  -------------------------------- Add to Cart --------------------------------- */
    

const onAddtocart = (cartitem) =>{
    console.log("Adding to cart")

    setcartCount(cartcount+1)
    // check if already in the list
    const ProductExist = cartList.find((item) => item.id === cartitem.id);

    if(ProductExist){
        setcartList(cartList.map((item)=>
            item.id===cartitem.id ? 
            {...ProductExist, quantity:ProductExist.quantity + 1}: item));

        } else{
        setcartList([...cartList, {...cartitem, quantity: 1}])
    }

}



/*  -------------------------------- Remove to Cart --------------------------------- */

const onRemovetocart = (cartitem) =>{
    console.log("Removing to cart")

    setcartCount(cartcount-1)

    const ProductExist = cartList.find((item) => item.id === cartitem.id);

    if(ProductExist.quantity === 1){
        setcartList(cartList.filter((item)=>item.id !== cartitem.id));
    } else{
        setcartList(
            cartList.map((item)=>item.id === cartitem.id ? {...ProductExist, quantity: ProductExist.quantity - 1}
            : item
            )
        );
    }
    }


/*  -------------------------------- Clear Cart --------------------------------- */

const cartClearance = () =>{
    setcartList([]);
    setcartCount(0);

}





/*  -------------------------------- Delete in Cart --------------------------------- */

const deleteCartitem = (cartitem) => {
    console.log("deleting")

    setcartCount(cartcount-cartitem.quantity)
    setcartList(cartList.filter((item)=>item.id !== cartitem.id));
   
}






/*  -------------------------------- Add a New Product in the Menu --------------------------------- */
        const addnewProduct = () => {
            // let num = menuarray.length +1;

            let newmenuEntry = {id:uuid(), 
                            name: newmenulist.name.toLowerCase().trim(),
                            category: newmenulist.category.trim(), 
                            price: newmenulist.price.trim(),
                            status: false,
                            pic: newmenulist.pic.trim()
                        }

            // Check if it already exist
            const alreadyExist = menuarray.find((item)=>item.name===newmenuEntry.name)
                        

        
            if(newmenuEntry.name==="" || newmenuEntry.category==="" || newmenuEntry.price==="" || newmenuEntry.pic===""){
                alert("Please fill out all data")
            }else{

                if(alreadyExist){
                    alert("it already exist")
                }else{
                    setMenuarray([...menuarray, newmenuEntry]);
    
                }


            }
            

            

           

            
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
                                        {/* <span>ID: {item.id}</span> */}
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
                        </div>
                    }
                />

                <Route path={"/admin"}
                    element={
                        <div>
                            <div className="carticon-count">
                            {cartcount}
                            </div>
                            <Admin menuarray={menuarray}
                                    addnewProduct={addnewProduct}
                                    newmenulist={newmenulist}
                                    setNewmenuList={setNewmenuList}
                                    />
                        </div>
                    }
                    />


                <Route path={"/cart"}
                element={
                    <div>
                        <div className="carticon-count">
                            {cartcount}
                        </div>
                        <Cart cartList={cartList}
                            setcartList={setcartList}
                            onAddtocart={onAddtocart}
                            onRemovetocart={onRemovetocart}
                            deleteCartitem = {deleteCartitem}
                            cartClearance = {cartClearance}
                            />
                    </div>
                }
                />


            </Routes>
        </div>

    )


}




export default App;