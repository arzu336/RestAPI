import '../styles/about.css';
import React from 'react';

import facebookIcon from '../görseller/facebook.jpg';
import twitterIcon from '../görseller/twitter.png';
import instagramIcon from '../görseller/instagram.png';

import headerLogo from '../görseller/site_logo_fav__16_.png';

import hakkimizda from '../görseller/hakkımızda.jpg'

function redirectToLogin() {
  window.location.href = '/'; // Login sayfasına yönlendir
}

function redirectToContact() {
  window.location.href = '/contact'; // İletişim sayfasına yönlendir
}

function redirectToAbout() {
  window.location.href = '/about'; // İletişim sayfasına yönlendir
}

function redirectToEducation() {
  window.location.href = '/education'; // İletişim sayfasına yönlendir
}

function About() {
  return (
    <div className="about-container">
      <div className="top-bar">
        <p className="contact-email">info@megaegitimakademi.com</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/megaegitimkademi_ahu_tatci/?igsh=ODA1NTc5OTg5Nw%3D%3D#" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>

      <header className="header">
        <div className="logo">
          <img src={headerLogo} alt="Site Logo" className="header-logo" />
        </div>
        <nav className="mobile-menu">
          <ul>
            <li><button onClick={redirectToLogin}>ANA SAYFA</button></li>
            <li><button onClick={redirectToEducation}>EĞİTİMLERİMİZ</button></li>
            <li><button onClick={redirectToAbout}>KURUMSAL</button></li>
            <li><button onClick={redirectToContact}>İLETİŞİM</button></li>
          </ul>
        </nav>
      </header>

      <div className="slider-a">
        <div className="slider-i">
          <div className="slider-it">
            <img src={hakkimizda} alt="Hakkımızda Görseli" className="slider-image" />
            <p className="slider-c">
            </p>
          </div>
        </div>
      </div>


      <div className="about-header">
        <br></br>
        <h1>HAKKIMIZDA</h1>
      </div>



      <div className="about-paragraph">
        <p>
          Kaliteli eğitimin Türkiye'de her noktaya ulaşabilmesi ,herkesin eşit şartlarda ve eşit imkanlar ile kendilerini geliştirebilmesi ilkesinden yola çıkarak kurmuş olduğumuz Mega  Egitim Akademi'de sizlere hem kaliteli hemde zengin içerikler sunmaktayız. İyi bir geleceğe sahip olabilmenin yolunun sürekli eğitim ve sürekli gelişim olduğu inancı ile çıktığımız bu yolda Herkes İçin Eğitim , Hep beraber Gelişim ilkesini benimseyerek sizlere en kaliteli içerikleri en uygun koşullarda sunmak birinci önceliğimizdir.          </p>
        <br></br>
        <br></br>
      </div>
      




      <footer className="footer-about">
        <div className="footer-column-about">
          <h4>Mega Eğitim Akademi</h4>
          <p>Mega Eğitim Akademi'den almış olduğunuz eğitimlerin sertifikası, Türkiye‘de eğitim alanında ilk Uluslararası Akreditasyona sahip ICCW onayı ile verilecektir</p>
        </div>
        <div className="footer-column-about">
          <h4>Online Eğitimler</h4>
          <p>Karikatür Eğitici Eğitimi</p>
          <p>Numeroloji Master Eğitimi</p>
          <p>Adobe Photoshop Eğitimi</p>
          <p>İnsan Kaynakları Uzmanlığı Eğitimi</p>
          <p>Network Marketing Eğitimi</p>
          <p>Avukat Katipliği Eğitimi</p>
        </div>

        <div className="footer-column-about">
          <h4>İletişim</h4>
          <p>info@megaegitimakademi.com</p>
          <p>+09 532 696 76 36</p>
          <p>Gazi Mah. 7733 Sok 6/1 A Blok K7 D94 Menemen/İzmir</p>
        </div>
        <div className="footer-bottom-about">
          <p>&copy; Copyright © 2024 Mega Eğitim Akademi, All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
