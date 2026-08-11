import React from "react";

function ProductCard({ product, addToCart, goToCart, t }) {
  if (!product) return null;

  const handleBuyNow = () => {
    if (addToCart) addToCart(product);
    if (goToCart) goToCart();
  };

  const handleAddToCart = () => {
    if (addToCart) addToCart(product);
  };

  const productName = t?.[product.nameKey] || product.name || "منتج";

  return (
    <div className="product-card">
      <img src={product.image} alt={productName} />
      <h3>{productName}</h3>
      <p className="price">{product.price} ج.م</p>
      
      <div className="card-actions">
        <button onClick={handleAddToCart} className="btn-add">
          {t?.addToCart || "أضف للسلة"}
        </button>
        <button onClick={handleBuyNow} className="btn-buy">
          {t?.buyNow || "اشتري الآن"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;