import React, { useState } from 'react'
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { MenuItems } from '../data/MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("fas fa-bars");
  const [showMenu, setShowMenu] = useState("navbar-menu");
  const handelMenu = ()=>{
    if (menu === "fas fa-bars"){
      setShowMenu("navbar-menu active");
    } else setShowMenu("navbar-menu");
    return menu === "fas fa-bars" ? setMenu("fas fa-times"): setMenu("fas fa-bars");
  }
  return (
    <nav className='container'>
        <h1 className='navbar-logo'>Trippy</h1>
        <div className="menu-icon">
          <i className={menu} onClick={handelMenu}></i>
        </div>
        <ul className={showMenu}>
          {MenuItems.map((item, index)=>{
            return (
              <li key={index}><Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link></li>
            )
          })}
          <button>Sign Up</button>
        </ul>
    </nav>
  )
}

export default Navbar

