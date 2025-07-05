import React from 'react'
import { MdDelete } from "react-icons/md";
import './cartCard.css'
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/cartSlice';

export default function CartCard({name ,price ,image,id}) {
      let dispatch = useDispatch()
  return (
    <>
      <div className="cartCard">
            <div className="left-card">
                        <img src={image} alt="" />
                  <div className="name-price">
                        <span>{name}</span>
                        <span>Rs.{price}/-</span>
                  </div>
            </div>
            <div className='right-card'>
                  <button onClick={() => dispatch(removeItem(id))}>Remove <MdDelete /></button>

            </div>
      </div>
    </>
  )
}
