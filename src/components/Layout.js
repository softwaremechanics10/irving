import React from 'react'
import './Layout.css'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import '@fontsource/poppins'

function Layout(props) {
  return (
    <div className='layout'>
      <Navbar/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout