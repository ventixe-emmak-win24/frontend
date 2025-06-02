import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout