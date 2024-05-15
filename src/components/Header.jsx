import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Title() {
  return (
    <>
      <a href="/">
        <img
          className="logo h-20 w-48 ml-5 mt-0 pt-0"
          alt="logo"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
      </a>
    </>
  )
}
function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (

    <div className='header-shadow shadow-md bg-green-100 border ' >
      <div className="header">
        <Title />
    
        <div className="nav-items px-5 mx-5 my-4 font-normal text-xl">
          <ul>
            <li>
              <Link to="/"> Home</Link>
              </li>
            <li>
              <Link to="/about" >
                About </Link>
            </li>
            <li> 
            <Link to="/contact" >
                Contact</Link></li>
          
            <li className="px-4 text-xl">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header