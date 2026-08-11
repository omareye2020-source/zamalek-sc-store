import React from 'react';
import { ShoppingBag, Search, Home , Store, Shield, Globe} from'lucide-react';
import logo from '../assets/zamalek logo.png';

function Navbar({lang, setLang, t, cartCount, goToCart, goToProducts, goToHome, scrollToSponsors}) {

 const toggleLanguage = () =>{
    setLang ( lang === 'ar' ? 'en' : 'ar');
 };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img onClick={goToHome} src={logo} alt="Zamalek Logo" className="brand-icon" style={{width:'40px' , height: 'auto'}} />
        <h2>{t.storeTitle}</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home"onClick={goToHome}><Home size={18} /> {t.home}</a>
        </li>
        <li>
          <a href="#store"  onClick={(e) => {
              e.preventDefault();
              goToProducts();
            }}><Store size={18} /> {t.store}</a>
        </li>
        <li>
         <a 
            href="#sponsors"  
            onClick={(e) => {
              e.preventDefault();
              if (scrollToSponsors) scrollToSponsors();
            }}
          >
            {t?.sponsors || "الرعاة"}
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder={t.searchPlaceholder} />
        </div>

        {/* زر تغيير اللغة */}
        <button onClick={toggleLanguage} className="lang-btn">
          <Globe size={18} /> {lang === 'ar' ? 'EN' : 'عربي'}
        </button>

        <div className="cart-icon-wrapper">
          <ShoppingBag size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;