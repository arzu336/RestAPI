import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "megaegitim" && password === "123456") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin-panel");
    } else {
      alert("Hatalı kullanıcı adı veya şifre");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Yönetici Girişi</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default AdminLogin;
