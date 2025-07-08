import React from 'react';
import '../styles/login.css';

import facebookIcon from '../görseller/facebook.jpg';
import twitterIcon from '../görseller/twitter.png';
import instagramIcon from '../görseller/instagram.png';

import enAlt from '../görseller/en_alt_kısmın.webp';

import sliderImage1 from '../görseller/lccwsertifika.webp'
import sliderImage2 from '../görseller/ktosertifika.webp'

import profileImage1 from '../görseller/borsa_teknik_analiz.png'
import profileImage2 from '../görseller/avukat_katipli__i.png'
import profileImage3 from '../görseller/bak__m_onar__m_y__neticili__i.png'
import profileImage4 from '../görseller/bioenerji.png'
import profileImage5 from '../görseller/Di___Hekimi_Asistanl_______E__itimi.png'
import profileImage6 from '../görseller/emlak_dan____manl______.png'
import profileImage7 from '../görseller/helal_g__da.png'
import profileImage8 from '../görseller/insan_kaynaklar__.png'
import profileImage9 from '../görseller/mantar_yeti__tiricili__i.png'

import headerLogo from '../görseller/site_logo_fav__16_.png';

function redirectToLogin() {
     window.location.href = '/';
}

function redirectToContact() {
     window.location.href = '/contact';
}

function redirectToAbout() {
     window.location.href = '/about';
}

function redirectToEducation() {
     window.location.href = '/education';
}

function redirectToAdminLogin() {
     window.location.href = '/admin-login';
}


function Login() {
     return (
          <div className="login-page">
               {/* Top Bar */}
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

               {/* Header */}
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
                              <li><button onClick={redirectToAdminLogin}>GİRİŞ</button></li>

                         </ul>
                    </nav>
               </header>


               <div className="slider-area">
                    <div className="slider-images">
                         <div className="slider-item">
                              <img src={sliderImage1} alt="Slider Görsel 1" className="slider-image" />
                              <h2>LCCW ONAYLI SERTİFİKA</h2>
                              <p className="slider-caption">
                                   INTERNATIONAL CERTIFICATION CENTER OF THE WORLD (DÜNYA ULUSLARARASI SERTİFİKASYON MERKEZİ) TARAFINDAN ONAYLANIP AKREDİTE EDİLEN VE TÜM DÜNYA ÜLKELERİNDE GEÇERLİ OLAN SERTİFİKALAR
                              </p>
                         </div>
                         <div className="slider-item">
                              <img src={sliderImage2} alt="Slider Görsel 2" className="slider-image" />
                              <h2>KTO KARATAY ÜNİVERSİTESİ ONAYLI SERTİFİKA</h2>
                              <p className="slider-caption">
                                   KTO KARATAY ÜNİVERSİTESİ SÜREKLİ EĞİTİM MERKEZİ MÜDÜRLÜĞÜ TARAFINDAN ONAYLANAN VE SORGULANIP GÖRÜNTÜLENEN ONAYLI SERTİFİKALAR
                              </p>
                         </div>
                         <div className="slider-item-mega">
                              <h1>NEDEN<br></br> MEGA <br></br>EĞİTİM <br></br>AKADEMİ?</h1>
                              <p className='slider caption-mega'>
                                   Ulusal çapta online eğitimleriyle dikkat çeken Mega Eğitim Akademi birçok alanda düzenlediği uzaktan eğitimlerle bireylerin gelişimine önem verir,destek olur.
                              </p>
                         </div>
                    </div>
               </div>




               <div className="team-profile">
                    <h3>ÖNE ÇIKAN KURSLARIMIZ</h3>
                    <div className="profile-container">
                         <div className="profile-card">
                              <img src={profileImage1} alt="Profil 1" className="profile-image" />
                              <h4>Borsa Teknik Analiz Eğitimi</h4>
                              <p>Eğitimimiz, Borsa İstanbul’da yatırımı olan ya da yatırım yapmak isteyen yatırımcılara yönelik, 2 ana analiz metodundan biri olan “Teknik Analiz” metodunun; basit, anlaşılır ve kolay uygulanabilir içeriğini kapsamaktadır.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage2} alt="Profil 2" className="profile-image" />
                              <h4>Avukat Katipliği Eğitimi</h4>
                              <p>Avukatlık hizmetlerinin bir kısmını, avukatlar adına yerine getiren kâtiplerin mesleki bilgi ve becerilerinin artırılması suretiyle hizmet kalitesinin yükseltilmesine destek olmak.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage3} alt="Profil 3" className="profile-image" />
                              <h4>Bakım - Onarım Yöneticiliği Eğitimi</h4>
                              <p>Bakım- Onarım Yönetimi ile meydana gelebilecek teknik sorunları planlı bakımlarla minimize ederek, üretim sürecinin verimliliğini arttırabilir ve maliyetleri yükselten etkileri en aza indirebilirsiniz.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage4} alt="Profil 4" className="profile-image" />
                              <h4>Bioenerji Uygulayıcı Eğitimi</h4>
                              <p>Bioenerji Nedir? Bioenerji , pozitif ve olumlu yönde insanların üzerinde kullanılan bir şifa tekniğidir. Kelime anlamı olarak ifade edildiğinde ise hayat enerjisi, hayat akımı ve doğal enerji olarak adlandırılır.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage5} alt="Profil 5" className="profile-image" />
                              <h4>Diş Hekimi Asistanlığı Eğitimi</h4>
                              <p>Diş Hekimi Asistanlığı Eğitimi, sektörde faal olarak çalışan ve çalışmak isteyen Diş Hekimi Asistanlarının mesleki ve kişisel gelişimine katkıda bulunarak Diş Hekimi Asistanı Mesleğinin incelik ve gerekliliklerini anlatmak için hazırlanmıştır.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage6} alt="Profil 6" className="profile-image" />
                              <h4>Emlak Danışmanlığı Eğitimi</h4>
                              <p>Emlakçılığı meslek edinmek isteyenlere mesleğin temel bilgilerini öğretip gerekli tüm mesleki bilgi ve deneyime sahip olmalarını sağlayarak mesleğin eğitimini almış insanları emlak sektörüne kazandırmak hedeflenmektedir.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage7} alt="Profil 7" className="profile-image" />
                              <h4>Helal Gıda İç Denetçi Eğitimi</h4>
                              <p>Ürünlerin paketlenmesi, etiketlenmesi, taşınması, servis ve lojistik faaliyetlerine ayrıca otelcilik, se yahat, eczacılık, kozmetik ve ilgili cihazlar ile diğer sağlık ürünlerine ilişkin özellikleri de içine almaktadır.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage8} alt="Profil 8" className="profile-image" />
                              <h4>İnsan Kaynakları Yönetimi Eğitimi</h4>
                              <p>kamudan özel sektöre tüm kurum ve kuruluşlarda, işletmelerde, akademik platformlarda İnsan Kaynakları Yönetimi’ne özellikle önem verilmektedir.</p>
                         </div>
                         <div className="profile-card">
                              <img src={profileImage9} alt="Profil 9" className="profile-image" />
                              <h4>Mantar Yetiştiriciliği Eğitimi</h4>
                              <p>Bu eğitim programı ile kültür mantarının ekim, hasat, paketleme ve muhafaza yöntemlerini öğreneceksiniz.</p>
                         </div>
                    </div>
               </div>







               <div className="recent-area">
                    <div className="recent-content">
                         <div className="recent-image">
                              <img src={enAlt} alt="Recent Görsel" />
                         </div>
                         <div className="recent-text">
                              <h3>Mega Eğitim Akademi ile Online Eğitim ve Uluslararası Sertifika</h3>
                              <p>
                                   Mega Eğitim Akademi olarak yüzlerce online eğitim, ömür boyu erişim imkanı ve uluslar arası sertifika ile siz değerli kursiyerlerimizin kariyerlerine yeni yön vermeyi hedeflemekteyiz.
                              </p>
                              <p>
                                   Katılımcıları, mesleki yetkinliklerinde kendilerine fayda sağlayacak ileri seviyede bilgi ve deneyimler ile buluşturmak, kendilerinin Kreatif yönlerini ön plana çıkarabilmelerine vesile olma görevini üstleniyoruz.
                              </p>
                         </div>
                    </div>
               </div>


               {/* Footer */}
               <footer className="footer">
                    <div className="footer-column">
                         <h4>Mega Eğitim Akademi</h4>
                         <p>Mega Eğitim Akademi'den almış olduğunuz eğitimlerin sertifikası, Türkiye‘de eğitim alanında ilk Uluslararası Akreditasyona sahip ICCW onayı ile verilecektir</p>
                    </div>
                    <div className="footer-column">
                         <h4>Online Eğitimler</h4>
                         <p>Karikatür Eğitici Eğitimi</p>
                         <p>Numeroloji Master Eğitimi</p>
                         <p>Adobe Photoshop Eğitimi</p>
                         <p>İnsan Kaynakları Uzmanlığı Eğitimi</p>
                         <p>Network Marketing Eğitimi</p>
                         <p>Avukat Katipliği Eğitimi</p>
                    </div>

                    <div className="footer-column">
                         <h4>İletişim</h4>
                         <p>info@megaegitimakademi.com</p>
                         <p>+09 532 696 76 36</p>
                         <p>Gazi Mah. 7733 Sok 6/1 A Blok K7 D94 Menemen/İzmir</p>
                    </div>
                    <div className="footer-bottom">
                         <p>&copy; Copyright © 2024 Mega Eğitim Akademi, All Rights Reserved.</p>
                    </div>
               </footer>
          </div>
     );
}
export default Login;
