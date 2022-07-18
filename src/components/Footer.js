import React from "react";
import './styles/footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className="Footer">
            <hr/>
            <p >
                <Link to="/" className="footer-links">
                    Home
                </Link>
            </p>
            <p>
                <Link to="./admin"  className="footer-links">
                    Admin Center
                </Link>

            </p>
            <p>
                <Link to="./cart" className="footer-links">
                    My Cart
                </Link>
            </p>
            <p className="copyright-footer">	© venv 2022</p>
            <hr/>
        


        </div>
    )
}

export default Footer;