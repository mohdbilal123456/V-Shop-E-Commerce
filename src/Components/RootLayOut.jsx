import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import { store } from '../Redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export default function RootLayOut() {
      return (
            
            <>
                  <Provider store={store}>
                        <ToastContainer/>
                        <Nav />
                        <Outlet />
                        <Footer />
                  </Provider>
                  

            </>
      )
}
