import React from "react";
import './styles/header.css';
import {Link} from 'react-router-dom';

const Header = ({cartcount}) => {
    const logolink = "https://img.freepik.com/premium-vector/bakery-bread-cakes-design-logo_545399-698.jpg?w=2000";
    const carticon = "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-shopping-cart-icon-png-image_313450.jpg";

    return(
        <div className="header">
            <p>
                <Link to="/">
                <img className="logo" src={logolink} alt="Logo Icon"/>
                </Link>
            </p>
            
            <h1 className="header-title"> My Bakery Menu</h1>
            
            
            <Link to="./cart" className="carticonlink">
            <img className="carticon" src={carticon} alt="cart icon"/>
            </Link>
            
            <p className="carticon-count">{cartcount}</p>
            
            
        </div>

    )
}

export default Header;