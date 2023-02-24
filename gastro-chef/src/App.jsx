import { useState } from 'react'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './footer'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Footer />
      {/* <div className="container">
        <Link to='/about'><span>Abc</span></Link>
      </div> */}
      {/* <Routes>
        <Route path='/' element={<Footer/>} />
        <Route/>
      </Routes> */}
    </div>
  )
}

export default App
