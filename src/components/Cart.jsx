import React, { useState } from 'react';
import { FaTrash, FaShoppingBag, FaTruck, FaMoneyBillWave, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

function Cart({ cart = [], setCart, t, goToHome }) {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // التأكد من أن cart مصفوفة دائماً
  const safeCart = Array.isArray(cart) ? cart : [];

  // حساب الإجمالي
  const subtotal = safeCart.reduce((sum, item) => sum + (item?.price || 0), 0);
  const shippingFee = safeCart.length > 0 ? 50 : 0;
  const totalPrice = subtotal + shippingFee;

  // حذف منتج معين
  const removeFromCart = (indexToRemove) => {
    if (setCart) {
      setCart(safeCart.filter((_, index) => index !== indexToRemove));
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح! 🏹 سنقوم بالتواصل معك لتأكيد الشحن.');
    if (setCart) setCart([]);
    if (goToHome) goToHome();
  };

  if (safeCart.length === 0) {
    return (
      <div className="empty-cart-container">
        <FaShoppingBag className="empty-icon" />
        <h2>سلة الشراء فارغة حالياً</h2>
        <p>لم تقم بإضافة أي منتجات من متجر الزمالك بعد.</p>
        <button onClick={goToHome} className="btn-return">العودة للتسوق</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">سلة الشراء وإتمام الطلب</h2>

      <div className="checkout-container">
        {/* العمود الأول: قائمة المنتجات والحساب */}
        <div className="order-summary-card">
          <h3><FaShoppingBag /> ملخص الطلب ({safeCart.length})</h3>
          
          <div className="cart-items-list">
            {safeCart.map((item, index) => (
              <div key={index} className="cart-item-row">
                <img src={item.image} alt={item.nameKey} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{t?.[item.nameKey] || 'منتج'}</h4>
                  <span className="cart-item-price">{item.price} ج.م</span>
                </div>
                <button 
                  onClick={() => removeFromCart(index)} 
                  className="btn-remove"
                  title="حذف المنتج"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="price-breakdown">
            <div className="price-row">
              <span>المجموع الفرعي:</span>
              <span>{subtotal} ج.م</span>
            </div>
            <div className="price-row">
              <span>الشحن التقديري:</span>
              <span>{shippingFee} ج.م</span>
            </div>
            <hr />
            <div className="price-row total-row">
              <span>الإجمالي الكلي:</span>
              <span>{totalPrice} ج.م</span>
            </div>
          </div>
        </div>

        {/* العمود الثاني: استمارة التوصيل وطريقة الدفع */}
        <form onSubmit={handleCheckout} className="checkout-form-card">
          <div className="form-section">
            <h3><FaTruck /> بيانات التوصيل</h3>
            <div className="input-group">
              <input type="text" placeholder="الاسم بالكامل" required />
            </div>
            <div className="input-group">
              <input type="tel" placeholder="رقم الهاتف" required />
            </div>
            <div className="input-group">
              <input type="text" placeholder="العنوان بالتفصيل" required />
            </div>
          </div>

          <div className="form-section">
            <h3>طريقة الدفع</h3>
            <div className="payment-options">
              <label className={`payment-card ${paymentMethod === 'cod' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'} 
                  onChange={() => setPaymentMethod('cod')} 
                />
                <FaMoneyBillWave className="payment-icon" />
                <div>
                  <strong>الدفع عند الاستلام</strong>
                  <p>ادفع كاش فور وصول شحنتك</p>
                </div>
              </label>

              <label className={`payment-card ${paymentMethod === 'wallet' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="wallet" 
                  checked={paymentMethod === 'wallet'} 
                  onChange={() => setPaymentMethod('wallet')} 
                />
                <FaMobileAlt className="payment-icon" />
                <div>
                  <strong>محفظة إلكترونية</strong>
                  <p>فودافون كاش / اتصالات / أورانج / WE</p>
                </div>
              </label>

              <label className={`payment-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')} 
                />
                <FaCreditCard className="payment-icon" />
                <div>
                  <strong>بطاقة ائتمان / ميزة</strong>
                  <p>Visa / Mastercard / Meeza</p>
                </div>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-confirm-order">
            تأكيد الطلب ({totalPrice} ج.م)
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;