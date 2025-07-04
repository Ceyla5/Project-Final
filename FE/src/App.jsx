import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from './Layout/MainLayout'
import Add from './pages/Add/Add'
import Admin from './pages/Admin/Admin'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import NoPage from './pages/NoPage/NoPage'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from "./pages/Login/Login";
import { LanguageProvider } from "./Context/LanguageProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";


function App() {

  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="admin" element={<Admin />} />
              <Route path="add" element={<Add />} />
              <Route path="about" element={<About />} />
              <Route path="detail/:id" element={<Detail />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </>
  )
}

export default App
