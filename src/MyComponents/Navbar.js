import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header>
        <div id="menu-bar" class="fa fa-bars"></div>
        {/* <a href="/" class="logo"><span>S_K</span> Technologies</a> */}
        <a href="/" class="logo">
      <img class="logo1" src="logo.jpeg" alt="sk_technologies" />
    </a>
        <nav class="navbar">
          <NavLink to="/">home</NavLink>
          <NavLink to="/visitors">visitors</NavLink>

          <NavLink to="/courses">courses</NavLink>
          <NavLink to="/contact">contact</NavLink>


        </nav>
      </header>
    </>
  )
}

export default Navbar;