import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra (8GB/256GB)",
      price: "24.990.000đ",
      image: "https://cf.shopee.vn/file/vn-11134207-7r98o-llbkf9faf6ba72",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max 256GB",
      price: "22.490.000đ",
      image:
        "https://www.didongmy.com/vnt_upload/product/09_2022/thumbs/(600x600)_14pro_max_vang_600x600_didongmy_1.png",
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max 256GB ",
      price: "33.990.000đ",
      image: "https://cf.shopee.vn/file/vn-11134207-7ras8-m32cfb39e13ada",
    },
    {
      id: 4,
      name: "Oppo Find 8x",
      price: "22.990.000đ",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjU_WsKmERGIQMZRLVDYo1NENy4-ViOceG4mCvVgnF7xbVbZxCbBQBvwhHCwCExvvp01c5NZPlYy5i9Wrf1458z_QJT10_-qhVpcM9TXqeiPnqylsa5m3CSdDgJeoEUjMegDq7SQ&usqp=CAc",
    },
    {
      id: 5,
      name: "Samsung Galaxay A55 5G ( 8G+128GB)",
      price: "8.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34193/samsung-galaxy-_main_857_450.png.webp",
    },
    {
      id: 6,
      name: "Samsung Galaxy S24 Ultra 5G (12GB+256GB)",
      price: "33.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34039/samsung-galaxy-_main_969_1020.png.webp",
    },
    {
      id: 7,
      name: "Xiaomi 14T Pro (12GB+512GB)",
      price: "14.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_35323/xiaomi-14t-pro-_main_638_1020.png.webp",
    },
    {
      id: 8,
      name: "Xiaomi 14 Ultra 5G (16GB+512GB",
      price: "32.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34600/xiaomi-14-ultra_main_627_1020.png.webp",
    },
    {
      id: 9,
      name: "iPhone 16 Plus 128GB",
      price: "25.490.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_35346/iphone-16-plus-_main_362_1020.png.webp",
    },
    {
      id: 10,
      name: "Xiaomi 14 Ultra 5G 16GB/512GB",
      price: "24.090.000đ",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/313889/xiaomi-14-ultra-black-thumbnew-600x600.jpg",
    },
  ];

  return (
    <div className="container">
      <h1>Sản Phẩm Của Chúng Tôi</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`} className="btn">
                Xem Chi Tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
