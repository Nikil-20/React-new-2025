import { useState } from 'react'
import Section from './Components/Section'
import './App.css'
import Conditional from './Components/Conditional'
import APICall from './Components/APICall'
import { Header } from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AxiosAPICall from './Components/AxiosAPICall'
import { createContext } from 'react'
import SinglePost from './Components/SinglePost'
import LoginContextProvider from './Contexts/LoginContextProvider'
import RefComp from './Components/RefComp'
import ReducerEx from './Components/ReducerEx'
import Todos from './Components/Todos'
import { store } from './store/store'
import { Provider } from 'react-redux'
import LayoutEffect from './Components/LayoutEffect'
import MemoEx from './Components/MemoEx'
import CallbackEx from './Components/CallbackEx'
import CustomEx from './Components/CustomEx'






function App() {
  return (
    <Provider store={store}  >

        <LoginContextProvider>

          <div>
            <Router >
              <Link to="/" >Home</Link>
              <Link to="/header"  >Header</Link>
              <Link to="/apiCall"  >API Call</Link>
              <Link to="/conditional"  >Conditional</Link>
              <Link to="/section"  > Section </Link>
              <Link to="/axiosapicall" >AxiosAPICall</Link>
              <Link to="/context" >Context</Link>
              <Link to="/ref">Use Ref   </Link>
              <Link to="/reducerex"> ReducerEx  </Link>
              <Link to="/redux">Redux Toolkit</Link>
              <Link to="/layouteffect"> Layout Effect </Link>
              <Link to="/memoex"  >MemeoEX</Link>
              <Link to='/callbackex'> CallbackEx </Link>
              <Link to='/customhook' >Custom Hook</Link>


              <Routes>
                <Route index element={<Home />}  ></Route>
                <Route path='header' element={<Header />} ></Route>
                <Route path='apiCall' element={<APICall />} ></Route>
                <Route path='conditional' element={<Conditional />}  ></Route>
                <Route path='section' element={<Section />}  ></Route>
                <Route path='axiosapicall' element={<AxiosAPICall />}  ></Route>
                <Route path='context' element={<SinglePost />}  ></Route>
                <Route path='ref' element={<RefComp />}   ></Route>
                <Route path='reducerex' element={<ReducerEx />}  > </Route>
                <Route path='redux' element={<Todos />}  ></Route>
                <Route path='layouteffect' element={<LayoutEffect></LayoutEffect>} ></Route>
                <Route path='memoex' element={<MemoEx></MemoEx>} ></Route>
                <Route path='callbackex' element={<CallbackEx></CallbackEx>}  ></Route>
                <Route path='customhook'  element={ <CustomEx></CustomEx> } ></Route>

              </Routes>

            </Router>
          </div>

        </LoginContextProvider>
      </Provider>


  );
}

export default App
