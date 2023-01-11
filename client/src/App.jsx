import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import DashBoard from "./components/DashBoard"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App