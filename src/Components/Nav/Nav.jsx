import React from 'react'
import { FaShopify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import './Nav.css'
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';


export default function Nav() {

  let items = useSelector((state)=>state)
  console.log(items)
  return (

    <div>
      <div className="nav">
        <div className="top-nav">
          <Link to='/'>
            <div className="logo">
              <span>V-Shop</span>
              <FaShopify />
            </div>
          </Link>

          <form className='search-box'>
            <input type="text" placeholder='Search Items ...' />
            <button><CiSearch /></button>
          </form>
          <div className="cart-box">
            <Link to='/cart'>
              <CiShoppingCart />
            </Link> 
            <span>{items.cart.length}</span>
          </div>
        </div>

        <div className="bottom-nav">
          <Link to='/'><li>Home</li></Link>
          <Link to='/shop'><li>Shop</li></Link>
          <Link to='/cart'><li>Cart</li></Link>
          <Link to='/contact'><li>Contact</li></Link>

        </div>
      </div>
    </div>
  )
}
