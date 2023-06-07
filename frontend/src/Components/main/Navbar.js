import React, { useState } from 'react'
import'./Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className='header'>
      <h1><Link to="/">Front Crew</Link></h1>
      <ul className={click ? ".Nav-menu .active" : "Nav-menu"} >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/main/Login">Login</Link></li>
        <li><Link to="/main/Sign_up">Sign_up</Link></li>
        <li><Link to="/main/Contact">Contact</Link></li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} Style={{color:'#fff'}}/>):(<FaBars size={20} Style={{color:'#fff'}}/>)} 
      
      </div>
    </div>
  )
}

export default Navbar