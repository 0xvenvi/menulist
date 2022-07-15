import React from "react";
import './styles/header.css';

const Header = () => {
    const logolink = "https://img.freepik.com/premium-vector/bakery-bread-cakes-design-logo_545399-698.jpg?w=2000";
    

    return(
        <div className="header">
            <img src={logolink} alt="Logo Icon"/>
            <h1 className="header-title"> My Bakery Menu</h1>

        </div>

    )
}

export default Header;