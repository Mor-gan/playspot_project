import React from "react";
import '../styles/footer.css';
import logo2 from '../Images/logo2.jpeg';

const Footer = () => {
    // GET CURRENT YEAR
    const currentYear = new Date().getFullYear()
    return (
        <div className="grid-container">
            <div className="footer_div">
                <img alt='logo' width={"100px"} height={"30px"} src={logo2} />
                <div className="social_icon_footer">
                    <a href="#" className="fa fa-facebook" id="icon"></a>
                    <a href="#" className="fa fa-twitter" id="icon"></a>
                    <a href="#" className="fa fa-instagram" id="icon"></a>
                    <a href="#" className="fa fa-google" id="icon"></a>
                    <a href="#" className="fa fa-snapchat" id="icon"></a>
                </div>
            </div>
            <div className="footer_list">
                <div>
                    <li><a>See full archive</a></li>
                    <li><a>January 2022</a></li>
                    <li><a>February 2022</a></li>
                    <li><a>March 2020</a></li>
                </div>
                <div>
                    <li> <a>April 2022</a></li>
                    <li><a>May 2022</a></li>
                    <li><a>June 2022</a></li>
                    <li><a>July 2022</a> </li>
                </div>
                <div>
                    <li><a>August 2022</a></li>
                    <li> <a>September 2022</a></li>
                    <li><a>October 2022</a></li>
                    <li><a>November 2022</a></li>
                </div>
            </div>
            <div className="footer">&copy;{currentYear} Playspot Network |<a> Home </a>|<a> Editorial policy </a>|
                <a> California Do Not Sell my Personal info </a>|<a> California Privacy Notice </a>|<a><span id="red_utube"> YouTube Terms and Conditions</span>  </a>|
                <a> Promotion rules </a>|<a> Cookie And Ad Choices </a> |
                <a> info@playsportnetwork.com </a>
            </div>
            <div className="footer_button"><button>Manage Preferences</button></div>
        </div>
    )
}

export default Footer