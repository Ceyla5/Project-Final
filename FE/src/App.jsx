import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from './Layout/MainLayout'
import Add from './pages/Add/Add'
import Admin from './pages/Admin/Admin'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import NoPage from './pages/NoPage/NoPage'
import Wishlist from './pages/Wishlist/Wishlist'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="add" element={<Add />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
