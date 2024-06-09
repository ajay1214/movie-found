import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                We'd love to hear from you! Contact us with your suggestions, comments, or inquiries. <p style={{display:"block",textAlign:"center",paddingTop:"5px",marginBottom:"0"}} >© Copyright {new Date().getFullYear()}</p>
                    
                    Made with  
                    ❤
                    by Ajay
                </div>
                <div className="socialIcons">
                    <a
                        href="https://www.instagram.com/ajay_bind786/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://github.com/ajay1214"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ajaybind/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                    >
                        <FaLinkedin />
                    </a>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
