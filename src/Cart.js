import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sty.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeProduct = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Xử lý thanh toán
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert(
        "Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm trước khi thanh toán."
      );
      return;
    }

    // Gửi thông tin giỏ hàng cho server hoặc xử lý logic thanh toán tại đây
    alert("Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đang được xử lý.");
    setCartItems([]); // Xóa giỏ hàng sau thanh toán
    localStorage.removeItem("cart");
  };

  // Tính tổng tiền
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Giỏ hàng của bạn</h1>
      {cartItems.length === 0 ? (
        <p>
          Giỏ hàng trống. <Link to="/">Mua sắm ngay</Link>
        </p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="details">
                <h3>{item.name}</h3>
                <p>Giá: {item.price.toLocaleString("vi-VN")} VNĐ</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="remove-btn"
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Tổng Cộng: {total.toLocaleString("vi-VN")} VNĐ</h2>
      <button onClick={handleCheckout} className="btn">
        Thêm Sản Phẩm
      </button>
      <Link to="/checkout" className="btn">
        Thanh Toán
      </Link>
    </div>
  );
};

export default Cart;
