import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

function Footer() {
  return (
    <div id='footerId'>
       <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="logo">TravelWay</h2>
          <p>Səyahətə bizimlə başla. Xatirələr topla, dünyanı kəşf et.</p>
        </div>

        <div className="footer-col">
          <h3>Keçidlər</h3>
          <ul>
            <li><Link to="/">{`Ana Səhifə`}</Link></li>
            <li><Link to="/about">{`Haqqımızda`}</Link></li>
            <li><Link to="/contact">{`Əlaqə`}</Link></li>
            <li><Link to="/wishlist">{`Seçilmişlər`}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Əlaqə</h3>
          <ul>
            <li>Email: info@travelway.az</li>
            <li>Tel: +994 55 555 55 55</li>
            <li>Baku, Azərbaycan</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
       TravelWay. Bütün hüquqlar qorunur.
      </div>
    </footer>
    </div>
  )
}

export default Footer


