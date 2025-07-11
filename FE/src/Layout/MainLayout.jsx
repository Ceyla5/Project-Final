import React from 'react'
import {Outlet} from 'react-router'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout