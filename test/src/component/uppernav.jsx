import  Nav1 from '../Images/Nav1.jpeg';
import  Nav2 from '../Images/Nav2.jpeg';
import  Nav3 from '../Images/Nav3.jpeg';
import React from "react";

const Nav = () => {
    return (
    <>
    <div id='upper_nav'>
    <div><img alt='logo' width={"100px"} src={Nav1}/></div> 
     <div id='side_uppernav'><img alt='' width={"100px"} src={Nav2}/><img alt='' width={"100px"}  src={Nav3}/></div>     
    </div>
    </> 
)
}

export default Nav