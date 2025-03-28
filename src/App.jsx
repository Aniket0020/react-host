import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import  Navbar from './components/Navbar'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='about/' element={<About/>}></Route>
        
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App