import React, { useState } from 'react'
import {Link } from "react-router-dom";
import "./navbar.css" ;
import {FaBars  } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function Navbar() {

    const [Mobile,setMobile]= useState(false)

  return (
    <nav className="navbar">

        <h3 className='logo'> logo </h3>

    <ul  onClick={()=>setMobile(false)} className=   {Mobile ? "nav-links-mobile" :   "nav-links"}>
        <Link to ='/'><li>Home</li></Link>
        <Link to ='/about'><li>About</li></Link>
        <Link to ='/podcast'><li>Podcast</li></Link>
        <Link to ='/organisation'><li>Organisation</li></Link>
        <Link to ='/actualite'><li>Actualite</li></Link>  
     </ul>
    
    <button className='mobile-menu-icon'  onClick={()=>setMobile(!Mobile)}>
            {Mobile ? <ImCross/> :   <FaBars/>}
    </button>
  
    </nav>
  )
}

export default Navbar