import { useState } from 'react'
import Section from './Components/Section'
import './App.css'
import Conditional from './Components/Conditional'
import APICall from './Components/APICall'
import { Header } from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'





function App() {

  return (
    <>
      {/* <div> <Section/> </div>
    <Conditional/> */}

      {/* <APICall/> */}


      <Router >
        <Link to="/" >Home</Link>
        <Link to="/header"  >Header</Link>
        <Link to="/apiCall"  >API Call</Link>
        <Link to="/conditional"  >Conditional</Link>
        <Link to="/section"  > Section </Link>

        <Routes>
          <Route index  element={<Home/>}  ></Route>
          <Route path='header' element={<Header />} ></Route>
          <Route path='apiCall' element={<APICall />} ></Route>
          <Route path='conditional' element={<Conditional/>}  ></Route>
          <Route path='section' element={<Section/>}  ></Route>
        </Routes>

      </Router>


    </>
  )
}

export default App
