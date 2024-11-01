import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { Collapse } from 'react-bootstrap'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Collection from './Pages/Collection'
import Footer from './Components/Footer'
import Search from './Components/Search'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <Navbar />
      <Search/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes> 
      <Footer/>     
    </div>
  )
}

export default App
