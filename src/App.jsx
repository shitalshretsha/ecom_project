import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'

import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'

const App = () => {

  const [location, setLocation] = useState()

 const getLocation = async ()=>{
  navigator.geolocation.getCurrentPosition(async pos=>{
    const{latitude, longitude} = pos.coords
    // console.log(latitude, longitude);

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    try {
      const location = await axios.get(url)
      const exactLocation = location.data.address
      setLocation(exactLocation)
      setOpenDropdown(false)
      // console.log(exactLocation);

    } catch (error) {
      console.log(error);

    }
  })
 }

 useEffect(()=>{
  getLocation()
 }, [])
  
  return (
    <BrowserRouter>
    <Navbar location= {location}/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/products' element = {<Products/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/products/:id' element = {<SingleProduct/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App