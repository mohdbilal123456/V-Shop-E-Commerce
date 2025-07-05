import React from 'react'
import CartCard from './CartCard'
import { useSelector } from 'react-redux'
import ec from '../../assets/Image/emptycart.png'
import './cart.css'

export default function Cart() {

  let items = useSelector(state => state)

  let total = items.cart.reduce((a,b)=>a+b.price,0)

  return (
    <>
      <div className="cart">
        {
          items.cart.length <= 0
            ?
            <div className="empty-cart">
              <img src={ec} alt="" />
              <h1>Empty Cart</h1>
            </div>
            :
            <div className="cartCart-section">
              {
                items.cart.map((v)=>{
                  return(
                    <CartCard name={v.name} price={v.price} image={v.image} id={v.id} />
                  )
                })
                 
              }
              <div className="price-section">
                    <span>Total Products :{items.cart.length}</span>
                    <span>Total Price : {total} </span>
              </div> 
            </div>
        }

        
      </div>
    </>
  )
}


