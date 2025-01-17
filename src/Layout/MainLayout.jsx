import React from 'react'
import Navbar from '../Components/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Common/Footer'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
    </div>
  )
}

export default MainLayout