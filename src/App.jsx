import { useState } from 'react'
import Section from './Components/Section'
import './App.css'
import Conditional from './Components/Conditional'
import APICall from './Components/APICall'
import { Header } from './Components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'





function App() {

  return (
    <>
      {/* <div> <Section/> </div>
    <Conditional/> */}

      {/* <APICall/> */}
{/* 
      <Router>
        <link to="/header"  >Header</link>
        <link to="/apiCall"  >API Call</link>

        <Routes>
          <Route path='header' element={<Header />} ></Route>
          <Route path='apiCall' element={<APICall />} ></Route>

        </Routes>

      </Router> */}

      <div> <APICall/> </div>

    </>
  )
}

export default App
