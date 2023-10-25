import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' w-full'>
        <div className=' mb-16'>

            <Header />
        </div>
        <div>
            <Outlet />
        </div>

        <div className=' w-full'>

            <Footer />
        </div>
    </div>
  )
}

export default Layout