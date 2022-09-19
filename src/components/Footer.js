import React from "react";
import "./Footer.css";

const Footer = ({credits}) => {
    const{year} = credits;

    return (  
        <footer className="footer">
            <div className="container">
                <h2 className="footer-subtitle">👨‍💻Copyright &copy; {year} Rodrigo Aranda Y. Todos los derechos reservados. 👨‍💻</h2>
            </div>

        </footer>
    );
};
 
export default Footer;