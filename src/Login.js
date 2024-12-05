import React, { useState } from "react";
import FacebookLogin from "react-facebook-login"; // Import thư viện đăng nhập Facebook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [facebookData, setFacebookData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập bằng email:");
    console.log("Email:", email);
    console.log("Password:", password);
    // Thêm logic gọi API đăng nhập ở đây
  };

  const responseFacebook = (response) => {
    console.log("Đăng nhập bằng Facebook:");
    console.log(response);
    setFacebookData(response);
    // Xử lý logic sau khi đăng nhập thành công
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Mật khẩu:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Đăng nhập
        </button>
      </form>

      <h3>Hoặc</h3>
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID" // Thay bằng App ID của bạn
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Đăng nhập bằng Facebook"
        cssClass="btn btn-facebook"
        icon="fa-facebook"
      />

      {facebookData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h4>Thông tin tài khoản Facebook:</h4>
          <p>Tên: {facebookData.name}</p>
          <p>Email: {facebookData.email}</p>
          <img src={facebookData.picture.data.url} alt="Facebook Avatar" />
        </div>
      )}
    </div>
  );
};

export default Login;
