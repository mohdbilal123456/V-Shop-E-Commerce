import React, { useState } from 'react'
import { category } from '../../category'
import { dummydata } from '../../dummydata'
import Product from '../Products/Product'
import './Shop.css'
import { FaShopify } from "react-icons/fa6";


export default function Shop() {

      let [cate, setCate] = useState(dummydata)

      function filterProduct(category) {
            if (category === "All") {
                  setCate(dummydata)
            }
            else {
                  const updateData = dummydata.filter((item) => (item.category === category))
                  setCate(updateData)
            }

      }


      return (
            <>
                  

                  <div className="shop">
                        <div className="heading">
                              <span>Shop Now</span>
                              <FaShopify />
                        </div>

                        <div className="category-section">

                              {
                                    category.map((item) => {
                                          return (
                                                <div className="category-card" onClick={() => filterProduct(item.name)}>
                                                      <img src={item.image} alt="" />
                                                      <span>{item.name}</span>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
                  <div className="product-section">
                        {
                              cate.map((v) => {
                                    return (
                                          <Product name={v.name} image={v.image} price={v.price} id={v.id} />
                                    )
                              })
                        }
                  </div>
            </>
      )
}
