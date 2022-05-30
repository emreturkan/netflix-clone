import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { AppContextProvider } from './context/AuthContext'
import Account from './pages/Account'
import Home from './pages/Home'
import Login from './pages/Login'
import Sigup from './pages/Sigup'

const App = () => {
  return (
    <>
    <AppContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sigup/>}/>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
    </AppContextProvider>
    </>
  )
}

export default App