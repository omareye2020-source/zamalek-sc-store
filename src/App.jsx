import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import products from './data/Products'; 
import Home from './Pages/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { translations } from './data/translations';
import './App.css';

function App() {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  // دالة إضافة منتج للسلة
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // دوال التنقل
  const goToHome = () => setCurrentPage('home');
  const goToProducts = () => setCurrentPage('products');
  const goToCart = () => setCurrentPage('cart');

  // دالة التمرير للرعاة بشكل مضموم وبدون أخطاء
  const scrollToSponsors = () => {
    const executeScroll = () => {
      const element = document.getElementById('sponsors');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(executeScroll, 200);
    } else {
      executeScroll();
    }
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar
        lang={lang} 
        setLang={setLang}
        t={t}
        cartCount={cart.length}
        goToCart={goToCart} 
        goToProducts={goToProducts}
        goToHome={goToHome}
        scrollToSponsors={scrollToSponsors}
      />

      {/* عرض الصفحة الرئيسية */}
      {currentPage === 'home' && (
        <Home
          t={t}
          addToCart={addToCart}
          goToCart={goToCart}
          goToProducts={goToProducts}
        />
      )}

      {/* عرض صفحة جميع المنتجات */}
      {currentPage === 'products' && (
        <main className="products-page" style={{ padding: '40px 20px' }}>
          <h2 style={{ marginTop: '80px', textAlign: 'center', marginBottom: '60px' }}>جميع المنتجات</h2>
          <div className="products-container">
            {products.map((singleProduct) => (
              <ProductCard 
                key={singleProduct.id} 
                product={singleProduct} 
                addToCart={addToCart}
                goToCart={goToCart}
                t={t} 
              />
            ))}
          </div>
        </main>
      )}

      {/* عرض صفحة السلة والدفع */}
      {currentPage === 'cart' && (
        <Cart 
          cart={cart} 
          setCart={setCart} 
          t={t} 
          goToHome={goToHome} 
        />
      )}

      <Footer t={t} />
    </div>
  );
}

export default App;