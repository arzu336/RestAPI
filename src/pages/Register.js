import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css"; // Ortak stil dosyası

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password,
      });

      if (res.status === 201 || res.status === 200) {
        alert("Kayıt başarılı! Giriş yapabilirsiniz.");
        navigate("/admin-login");
      }
    } catch (err) {
      console.error("Kayıt hatası:", err.response || err);
      alert("Kayıt başarısız. " + (err.response?.data?.message || "Sunucuya bağlanılamadı."));
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Kayıt Ol</h2>
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Kayıt Ol</button>
        <p>
          Zaten hesabınız var mı? <Link to="/admin-login">Giriş Yap</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
