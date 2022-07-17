import React from "react";
import './styles/header.css';

const Header = ({cartcount}) => {
    const logolink = "https://img.freepik.com/premium-vector/bakery-bread-cakes-design-logo_545399-698.jpg?w=2000";
    const carticon = "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-shopping-cart-icon-png-image_313450.jpg";

    return(
        <div className="header">
            <a href="./home"><img className="logo" src={logolink} alt="Logo Icon"/></a>
            
            <h1 className="header-title"> My Bakery Menu</h1>
            
            <a className="carticonlink" href="./">
                
                <img className="carticon" src={carticon} alt="cart icon"/>
                <p className="carticon-count">{cartcount}</p>
            </a>
            
        </div>

    )
}

export default Header;