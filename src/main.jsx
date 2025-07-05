import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import RootLayOut from './Components/RootLayOut'
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <Routes>
      <Route element={<RootLayOut />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Route>

    </Routes>

  </BrowserRouter>
)
