import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // yönlendirme için

function AdminPanel() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/images");
      setImages(res.data);
    } catch (error) {
      console.error("Görseller alınamadı:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Lütfen dosya seçin!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/api/images", formData);
      setSelectedFile(null);
      setDescription("");
      fetchImages();
      alert("Görsel yüklendi!");
    } catch (error) {
      console.error("Yükleme hatası:", error);
      alert("Yükleme başarısız!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`);
      fetchImages();
    } catch (error) {
      alert("Silme başarısız!");
    }
  };

  const handleEdit = (id) => {
    alert("Güncelleme fonksiyonu henüz yapılmadı.");
  };

  const handleLogout = () => {
    // Oturumu kapat (örneğin token sil)
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete("http://localhost:5000/api/user/delete", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      localStorage.removeItem("token");
      alert("Hesap silindi.");
      navigate("/register");
    } catch (error) {
      alert("Hesap silinemedi.");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Admin Panel</h2>

      {/* === Upload Alanı === */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Yeni Görsel Yükle</h4>
        <input type="file" onChange={handleFileChange} />
        <br />
        <input
          type="text"
          placeholder="Görsel açıklaması"
          value={description}
          onChange={handleDescriptionChange}
          style={{ marginTop: "10px", width: "300px" }}
        />
        <br />
        <button onClick={handleUpload} style={{ marginTop: "10px" }}>
          Yükle
        </button>
      </div>

      {/* === Butonlar === */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleLogout} style={{ marginRight: "10px" }}>
          Çıkış Yap
        </button>
        <button onClick={handleRegister} style={{ marginRight: "10px" }}>
          Kayıt Ol
        </button>
        <button onClick={handleDeleteAccount} style={{ color: "red" }}>
          Hesabı Sil
        </button>
      </div>

      {/* === Görseller Listesi === */}
      <h3>Yüklenen Görseller</h3>
      <div>
        {images.map((img) => (
          <div key={img.id} style={{ marginBottom: "20px" }}>
            <img src={img.url} alt={img.name} width="200" />
            <p>{img.description || "Açıklama yok"}</p>
            <button onClick={() => handleDelete(img.id)}>Sil</button>
            <button onClick={() => handleEdit(img.id)}>Güncelle</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
