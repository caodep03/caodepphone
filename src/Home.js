import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23 Ultra (8GB/256GB)",
      price: "24.990.000đ",
      image: "https://cf.shopee.vn/file/vn-11134207-7r98o-llbkf9faf6ba72",
      description:
        "Điện thoại thông minh cao cấp với màn hình Dynamic AMOLED 6.8 inch, camera chính 200MP, chip Snapdragon 8 Gen 2 và dung lượng pin 5000mAh.",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max 256GB",
      price: "22.490.000đ",
      image:
        "https://www.didongmy.com/vnt_upload/product/09_2022/thumbs/(600x600)_14pro_max_vang_600x600_didongmy_1.png",
      description:
        "Màn hình 6.7 inch Super Retina XDR OLED, tần số quét 120Hz. Chip A17 Pro mạnh mẽ, hiệu suất vượt trội. Hệ thống camera 48MP, quay video 4K HDR, ProRes. Dung lượng 256GB, lưu trữ nhiều dữ liệu. Thiết kế khung titanium, kính Ceramic Shield. Pin lâu dài, hỗ trợ sạc nhanh và MagSafe. Hệ điều hành iOS 17 với nhiều tính năng mới. Kết nối 5G, Wi-Fi 6, Bluetooth 5.3.",
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max 256GB ",
      price: "33.990.000đ",
      image: "https://cf.shopee.vn/file/sg-11134301-7rdvs-m01bhb1twkvn33",
      description:
        "Màn hình 6.7 inch Super Retina XDR OLED, tần số quét 120Hz. Chip A18 Pro mạnh mẽ, hiệu suất vượt trội. Hệ thống camera 48MP, quay video 4K HDR, ProRes. Dung lượng 256GB, lưu trữ nhiều dữ liệu. Thiết kế khung titanium, kính Ceramic Shield. Pin lâu dài, hỗ trợ sạc nhanh và MagSafe. Hệ điều hành iOS 18 với nhiều tính năng mới. Kết nối 5G, Wi-Fi 6E, Bluetooth 5.4.",
    },
    {
      id: 4,
      name: "Oppo Find 8x",
      price: "22.990.000đ",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjU_WsKmERGIQMZRLVDYo1NENy4-ViOceG4mCvVgnF7xbVbZxCbBQBvwhHCwCExvvp01c5NZPlYy5i9Wrf1458z_QJT10_-qhVpcM9TXqeiPnqylsa5m3CSdDgJeoEUjMegDq7SQ&usqp=CAc",
      description:
        "Màn hình 6.7 inch AMOLED, tần số quét 120Hz. Chip Snapdragon 8 Gen 3, hiệu suất vượt trội. Hệ thống camera chính 50MP, quay video 4K, hỗ trợ AI. Dung lượng 256GB, lưu trữ thoải mái. Thiết kế khung kim loại, kính cường lực Gorilla Glass. Pin 4800mAh, hỗ trợ sạc nhanh 80W. Hệ điều hành ColorOS 14, tính năng đa nhiệm mạnh mẽ. Kết nối 5G, Wi-Fi 6, Bluetooth 5.3.",
    },
    {
      id: 5,
      name: "Samsung Galaxay A55 5G ( 8G+128GB)",
      price: "8.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34193/samsung-galaxy-_main_857_450.png.webp",
      description:
        "Màn hình 6.5 inch Super AMOLED, tần số quét 90Hz. Chip Exynos 1280, hiệu suất ổn định. Hệ thống camera chính 64MP, hỗ trợ chụp ảnh ban đêm và video Full HD. Dung lượng 8GB RAM và 128GB bộ nhớ trong, lưu trữ thoải mái. Thiết kế khung nhựa, kính Gorilla Glass 5. Pin 5000mAh, hỗ trợ sạc nhanh 25W. Hệ điều hành One UI 5.1, nhiều tính năng tiện ích. Kết nối 5G, Wi-Fi 5, Bluetooth 5.2.",
    },
  ];

  return (
    <div>
      <div className="banner">
        <h1>CHÀO MỪNG BẠN ĐẾN VỚI CỬA HÀNG ĐIỆN THOẠI</h1>
      </div>
      <div className="container">
        <h2>Sản Phẩm Mới Nhất</h2>
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
    </div>
  );
};

export default Home;
