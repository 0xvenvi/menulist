import React from "react";
import './styles/footer.css';

const Footer = () => {
    return(
        <div className="Footer">
            <hr/>
            <a href="./home">Home</a>
            <a href="./admin">Admin Center</a>
            <a href="./cart">My Cart</a>
            <p className="copyright-footer">	© venv 2022</p>
            <hr/>
        


        </div>
    )
}

export default Footer;