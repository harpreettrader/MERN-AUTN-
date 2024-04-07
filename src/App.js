import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App