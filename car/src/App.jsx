import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBooking from './pages/MyBooking'

function App() {

  const [showLogin, setShowLogin] = React.useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      { !isOwnerPath &&<Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='/my-bookings' element={<MyBooking/>} />
      </Routes>
    </>
  )
}

export default App
