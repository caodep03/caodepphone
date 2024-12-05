import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">📱 PhoneStore</div>
        <nav>
          <Link to="/">Trang Chủ</Link>
          <Link to="/products">Sản Phẩm</Link>
          <Link to="/cart">Giỏ Hàng</Link>
          <Link to="/login">Đăng Nhập</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
