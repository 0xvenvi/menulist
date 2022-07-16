import React, { useState } from "react";
import Header from './components/Header';
import './components/styles/index.css';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";


const App = () =>{

    const [menuarray, setMenuarray] = useState([
        {id:0, name:"crossaint", category:"Bread & Buns", price:"200", status:false, pic:"https://cdn.kuali.com/wp-content/uploads/2004/07/16015122/croissants-wooden-cutting-board-830x552.jpg"},
        {id:1, name:"pretzel", category:"Bread & Buns", price:"150", status:false, pic:"https://preppykitchen.com/wp-content/uploads/2021/02/Soft-Pretzel-Recipe-preppy-kitchen-500x375.jpg"},
        {id:2, name:"mochi", category:"Cookies & Pastries", price:"250", status:false, pic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F02%2F1014786-Easy-Mochi-Photo-by-liz-650x465.jpg"},
        {id:3, name:"chocolate chip cookie", category:"Cookies & Pastries", price:"100", status:false, pic:"https://handletheheat.com/wp-content/uploads/2019/02/Peanut-Butter-Chocolate-Chip-Cookies-1.jpg"},
        {id:4, name:"strawberry doughnut", category:"Doughnuts", price:"100", status:false, pic:"http://www.barbaracooks.com/wp-content/uploads/2014/06/strawberry-split-donuts-2.tif.jpg"},
        {id:5, name:"chocolate doughnut", category:"Doughnuts", price:"100", status:false, pic:"https://handletheheat.com/wp-content/uploads/2010/11/Baked-Chocolate-Doughnuts.jpg"},
        {id:6, name:"pride cake", category:"Cakes", price:"250", status:false, pic:"https://images-gmi-pmc.edge-generalmills.com/63b528dc-8beb-4289-96e3-6d8bef0a898d.jpg"},
        {id:7, name:"chocolate cake", category:"Cakes", price:"300", status:false, pic:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1043451_11-4713959.jpg"},
        {id:8, name:"blueberry cake", category:"Cakes", price:"350", status:false, pic:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/11/0/FNK_Wake-and-Cake-Blueberry-Breakfast-Cake-H-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494520426604.jpeg"},
        {id:9, name:"test", category:"test", price:"100", status:false, pic:"test"}
    ])

    const [newmenulist, setNewmenuList] = useState({
        id:"", name:"", category:"", price:"", status:"", pic:""

    })

/*  -------------------------------- Add a New Product in the Menu --------------------------------- */
        const addnewProduct = () => {


            let num = menuarray.length +1;

            let newmenuEntry = {id:num, 
                            name: newmenulist.name,
                            category: newmenulist.category, 
                            price: newmenulist.price,
                            status: false,
                            pic: newmenulist.pic
                        }
            console.log(newmenuEntry);
        
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
            <div className="menu-body">
                {sectionCategory.map((myCategoryList)=>{
                    return(
                        <div className="section-container">
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
                                    <div className="item-container">
                                        <img src={item.pic} alt="picture of {item.name}"/>
                                        <span>ID: {item.id}</span>
                                        {/* <span>Category: {item.category}</span> */}
                                        <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                                        <span className="price"> PHP {item.price}</span>
                                        <button className="add-to-cart-btn">Add to Cart</button>
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
                        <Header/>
                        <MenuSection/>
                        <Footer/>
                        </div>
                    }
                />

                <Route path={"/home"}
                    element={
                        <div>
                        <Header/>
                        <MenuSection/>
                        <Footer/>
                        </div>
                    }
                />



                <Route path={"/admin"}
                    element={
                        <div>
                            <Header/>
                            <Admin menuarray={menuarray}
                                    addnewProduct={addnewProduct}

                                    newmenulist={newmenulist}
                                    setNewmenuList={setNewmenuList}

                                    />
                                    
                            <Footer/>

                        </div>

                    }
                    
                    />


            </Routes>
        </div>

    )


}

export default App;