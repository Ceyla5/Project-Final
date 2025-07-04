import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageProvider.jsx';
import './style.css';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const { toggleLang, t } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="logo">{t.logo}</div>
      <div className="nav-links">
        <Link to="/">{t.home}</Link>
        <Link to="/admin">{t.tours}</Link>
        <Link to="/">{t.about}</Link>
        <HashLink smooth to="/#footerId">{t.contact}</HashLink>
        <Link to="/wishlist">{t.wishlist}</Link>
        <Link to="#">{t.login}</Link>
        <button className="langBtn" onClick={toggleLang}>{t.langBtn}</button>
      </div>
    </nav>
  );
}

export default Navbar;
