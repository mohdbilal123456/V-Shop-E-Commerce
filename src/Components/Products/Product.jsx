import React from 'react'
import './product.css'
import { dummydata } from '../../dummydata'
import { useDispatch } from 'react-redux'
import reducer, { addItem } from '../../Redux/cartSlice'

export default function Product({name,image,price,id}) {

  let dispatch = useDispatch()

  return (
    <>
      
      <div className="products">
            <img src={image} alt="" />
            <div className="product-details">
                  <div className='name'>{name}</div>
                  <div className='price'>Rs. {price}</div>
                  <div>
                        <button onClick={()=>{dispatch(addItem({name:name,image:image,price:price,id:id}))}}>Add +</button>
                  </div>
            
            </div>
      </div>
    </>
  )
}
