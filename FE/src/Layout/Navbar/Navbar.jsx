import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageProvider.jsx';
import './style.css'

function Navbar() {
  const { toggleLang, t } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="logo">Səyahət Dünyası</div>
      <div className="nav-links">
        <Link to="/">{t.home}</Link>
        <Link to="/admin">{t.tours}</Link>
        <Link to="/">{t.about}</Link>
        <Link to="#">{t.contact}</Link>
        <Link to="/wishlist">{t.wishlist}</Link>
        <Link to="#">{t.login}</Link>
        <button className="langBtn" onClick={toggleLang}>{t.langBtn}</button>
      </div>
      <div>
         
      </div>
    </nav>
  );
}

export default Navbar;
