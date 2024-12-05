import React from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
const ProductDetail = () => {
  const { id } = useParams();

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
    {
      id: 6,
      name: "Samsung Galaxy S24 Ultra 5G (12GB+256GB)",
      price: "33.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34039/samsung-galaxy-_main_969_1020.png.webp",
      description:
        "Màn hình 6.8 inch Dynamic AMOLED 2X, tần số quét 120Hz, HDR10+. Chip Exynos 2400 hoặc Snapdragon 8 Gen 3, hiệu suất cực mạnh. Hệ thống camera chính 200MP, hỗ trợ chụp ảnh siêu nét và quay video 8K. Dung lượng 12GB RAM và 256GB bộ nhớ trong, đa nhiệm mượt mà, lưu trữ rộng rãi. Thiết kế khung kính và kim loại cao cấp, bảo vệ bởi Gorilla Glass Victus 2. Pin 5000mAh, hỗ trợ sạc nhanh 45W và sạc không dây. Hệ điều hành One UI 6, với nhiều tính năng tùy chỉnh. Kết nối 5G, Wi-Fi 6E, Bluetooth 5.3.",
    },
    {
      id: 7,
      name: "Xiaomi 14T Pro (12GB+512GB)",
      price: "14.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_35323/xiaomi-14t-pro-_main_638_1020.png.webp",
      description:
        "Màn hình 6.67 inch AMOLED, tần số quét 120Hz, HDR10+ cho trải nghiệm hình ảnh mượt mà. Chip Snapdragon 8 Gen 3, hiệu suất vượt trội cho mọi tác vụ. Hệ thống camera chính 200MP, hỗ trợ quay video 8K và chụp ảnh sắc nét. Dung lượng 12GB RAM và 512GB bộ nhớ trong, đa nhiệm mạnh mẽ, lưu trữ thoải mái. Thiết kế khung kim loại, kính Gorilla Glass 5 bền bỉ. Pin 5000mAh, hỗ trợ sạc nhanh 120W và sạc không dây. MIUI 15 trên nền tảng Android 14, nhiều tính năng mới. Kết nối 5G, Wi-Fi 6, Bluetooth 5.3.",
    },
    {
      id: 8,
      name: "Xiaomi 14 Ultra 5G (16GB+512GB",
      price: "32.990.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_34600/xiaomi-14-ultra_main_627_1020.png.webp",
      description:
        "Màn hình 6.73 inch AMOLED, độ phân giải QHD+ và tần số quét 120Hz, HDR10+ cho trải nghiệm hình ảnh cực kỳ sắc nét và mượt mà. Chip Snapdragon 8 Gen 3, hiệu suất tối ưu cho mọi nhu cầu chơi game và đa nhiệm. Hệ thống camera chính 200MP với khả năng quay video 8K, kết hợp với các cảm biến cao cấp để cho ra những bức ảnh chi tiết và sống động. Dung lượng 16GB RAM và 512GB bộ nhớ trong, đảm bảo trải nghiệm đa nhiệm mượt mà và lưu trữ rộng rãi. Thiết kế sang trọng với khung kim loại và kính Gorilla Glass Victus. Pin 5000mAh, hỗ trợ sạc nhanh 120W và sạc không dây. MIUI 15 trên nền tảng Android 14, mang lại nhiều tính năng mới và cải tiến. Kết nối 5G, Wi-Fi 6, Bluetooth 5.3.",
    },
    {
      id: 9,
      name: "iPhone 16 Plus 128GB",
      price: "25.490.000đ",
      image:
        "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_35346/iphone-16-plus-_main_362_1020.png.webp",
      description:
        "Màn hình 6.7 inch Super Retina XDR OLED, độ phân giải cao và tần số quét 60Hz, mang lại hình ảnh sắc nét và màu sắc sống động. Chip A17 Bionic mạnh mẽ, hiệu suất vượt trội và tiết kiệm năng lượng. Camera chính 48MP với khả năng chụp ảnh chi tiết, hỗ trợ quay video 4K HDR. Dung lượng bộ nhớ trong 128GB, lưu trữ đủ cho các ứng dụng và dữ liệu cơ bản. Thiết kế khung nhôm và kính Ceramic Shield, bền bỉ và sang trọng. Pin lâu dài với khả năng sạc nhanh và hỗ trợ sạc không dây MagSafe. Hệ điều hành iOS 17 với nhiều tính năng mới và cải tiến. Kết nối 5G, Wi-Fi 6 và Bluetooth 5.3.",
    },
    {
      id: 10,
      name: "Xiaomi 14 Ultra 5G 16GB/512GB",
      price: "24.090.000đ",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/313889/xiaomi-14-ultra-black-thumbnew-600x600.jpg",
      description:
        "Màn hình 6.73 inch AMOLED, độ phân giải 3200 x 1440 pixels, tần số quét 120Hz, mang lại trải nghiệm hình ảnh mượt mà và sắc nét. Chip Snapdragon 8 Gen 3, hiệu suất mạnh mẽ, xử lý mượt mà các tác vụ nặng. Hệ thống camera chính 50MP với cảm biến cực kỳ nhạy, hỗ trợ quay video 8K và chụp ảnh chi tiết ở mọi điều kiện ánh sáng. Dung lượng bộ nhớ 16GB RAM và 512GB bộ nhớ trong, đáp ứng nhu cầu sử dụng và lưu trữ cao. Thiết kế khung kim loại, mặt kính Corning Gorilla Glass Victus, bền bỉ và sang trọng. Pin 5000mAh, hỗ trợ sạc nhanh 120W, sạc không dây 50W và sạc ngược 10W. Hệ điều hành MIUI 15 trên nền Android 14, cung cấp nhiều tính năng mới và cải tiến. Kết nối 5G, Wi-Fi 6, Bluetooth 5.3.",
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Sản phẩm không tìm thấy!</h2>;
  }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <p>Giá: {product.price}</p>
          <p>Mô tả: {product.description}</p>
          <Link to="/cart" className="btn">
            Thêm vào Giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
