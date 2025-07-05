import React, { useState } from 'react'
import bg from '../../assets/Image/bg0.gif'
import './Home.css'
import { category } from '../../category'
import Product from '../Products/Product'
import { dummydata } from '../../dummydata'
import Footer from '../Footer/Footer'


export default function Home() {

  let [cate, setCate] = useState(dummydata)

  function filterProduct(category) {
    const updateData = dummydata.filter((item) => (item.category === category))

    setCate(updateData)
  }

  const filterSort = (e)=>{

    let value = e.target.value;
    // console.log(value)

    let sortedData = [...cate]

    if(value=='low-to-high'){
      sortedData.sort((a,b)=>a.price-b.price)
    }
    else if(value=='high-to-low'){
      sortedData.sort((a,b)=>a.price-b.price)
    }
    else if(value=='a-z')
    {
      sortedData.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if(value=='a-z')
    {
      sortedData.sort((a,b)=>b.name.localeCompare(a.name))
    }

    setCate(sortedData)

  }

  return (
    <>
      <div className="home">
        <div className="hero-bg">
          <img src={bg} alt="" />
        </div>


        <div className="category-section">

          {
            category.slice(0, 5).map((item) => {
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
      <h1>Trending Products</h1>
      <div className="filter">
        <h2>Sort By : </h2>
        <select onChange={filterSort}>
          <option value="">Filter</option>
          <option value="low-to-high">Price : Low to High</option>
          <option value="high-to-low">Price : High to Low</option>
          <option value="a-z">Name : A-Z</option>
          <option value="z-a">Name : Z-A</option>
        </select>
      </div>

      <div className="product-section">
        {
          cate.slice(0, 7).map((v) => {
            return (
              <Product name={v.name} image={v.image} price={v.price} id={v.id} />
            )
          })
        }
      </div>



    </>
  )
}
