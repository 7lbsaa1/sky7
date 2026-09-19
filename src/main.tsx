import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Admin from './pages/Admin'
import BlockedPage from './pages/BlockedPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* المسارات المحمية التي تتطلب تسجيل دخول وتخطيط الموقع الأساسي */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        
        {/* المسارات المستقلة (خارج التخطيط الأساسي) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blocked" element={<BlockedPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)