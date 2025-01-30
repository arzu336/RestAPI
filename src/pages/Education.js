import '../styles/education.css';
import React from 'react';

import facebookIcon from '../görseller/facebook.jpg';
import twitterIcon from '../görseller/twitter.png';
import instagramIcon from '../görseller/instagram.png';

import headerLogo from '../görseller/site_logo_fav__16_.png';


import kvkk from '../görseller/tum/kvkk.png'
import photoshop from '../görseller/tum/Photoshop_E__itimi.png'
import ahsapdograma from '../görseller/tum/ah__ap_do__rama_teknolojisi.png'
import ahsapyapi from '../görseller/tum/Ah__ap_Yap___Sistemleri_E__itimi.png'
import akilzeka from '../görseller/tum/Ak__l_ve_Zeka_Oyunlar___E__itimi.png'
import alci from '../görseller/tum/al_____model_kal__p.png'
import cilingir from '../görseller/tum/Anahtarc__l__k_ve___ilingirlik.png'
import aricilik from '../görseller/tum/aricilik.png'
import asansor from '../görseller/tum/asansorsistemleri.png'
import avukatkatip from '../görseller/tum/avukatkatipligi.png'
import ayakkabimodel from '../görseller/tum/Ayakkab___Modelistli__i.png'
import ayakkabiuretim from '../görseller/tum/Ayakkab_____retimi.png'
import bagcilik from '../görseller/tum/ba__c__l__k.png'
import bahcivan from '../görseller/tum/bah____vanl__k.png'
import bakim from '../görseller/tum/bak__m_onar__m_y__neticili__i.png'
import balik from '../görseller/tum/Bal__k____l__k_Ve_Su___r__nleri_E__itimi.png'
import beton from '../görseller/tum/Beton-__imento_ve_Zemin_Teknolojisi_E__itimi.png'
import betonarme from '../görseller/tum/betonarme.png'
import bilgdestend from '../görseller/tum/bilgisayar_destekli_end__striyel_modelleme.png'
import bildesmak from '../görseller/tum/bilgisayar_destekli_makina_ressaml______.png'
import bilmakimalat from '../görseller/tum/bilgisayarl___makine_imalat__.png'
import bina from '../görseller/tum/bina_site.png'
import bioenerji from '../görseller/tum/bioenerji.png'
import bitkisel from '../görseller/tum/bitkisel_ya_____retimi.png'
import bobinaj from '../görseller/tum/bobinaj_e__itimi.png'
import borsa_teknik_analiz from '../görseller/tum/borsateknikanaliz.png'
import borsa_temel_analiz from '../görseller/tum/borsa_temel_analiz.png'
import boya from '../görseller/tum/boya___retimi_ve_kontrol___e__itimi.png'
import tasisletme from '../görseller/tum/de__erli_ve_yar___de__erli_ta___iletmecili__i.png'
import cam from '../görseller/tum/dekoratif_cam.png'
import evtekstili from '../görseller/tum/dekoratif_ev_tekstili_e__itimi.png'
import derigiyim from '../görseller/tum/deri_giyim.png'
import derisleme from '../görseller/tum/deri_i__leme_e__itimi.png'
import diksiyon from '../görseller/tum/diksiyonbedendili.png'
import dishekimiasistan from '../görseller/tum/dishekimligiasistan.png'
import dizelmotor from '../görseller/tum/dizel_motorlar___yak__t_pompas___ve_enjekt__r_ayarc__l_______e__itimi.png'
import dokumaoperator from '../görseller/tum/dokuma_operat__rl______.png'
import editor from '../görseller/tum/edit__rl__k.png'
import eldokuma from '../görseller/tum/el_dokuma.png'
import elmakinenakisi from '../görseller/tum/el_ve_makine_nak______.png'
import elektespan from '../görseller/tum/elektrik_tesisatlar___ve_pano_mont__rl_______e__itimi.png'
import elekevalet from '../görseller/tum/elektrikli_ev_aletleri_teknik_servisi.png'
import emlakdan from '../görseller/tum/emlak_dan____manl______.png'
import endbitkiyet from '../görseller/tum/end__striyel_bitki_yeti__tiricili__i.png'
import endbakim from '../görseller/tum/end__striyel_bak__m_onar__m.png'
import endcam from '../görseller/tum/end__striyel_cam.png'
import endcorap from '../görseller/tum/end__striyel___orap___rme.png'
import endduzorme from '../görseller/tum/end__striyel_d__z___rme.png'
import endetisleme from '../görseller/tum/end__striyel_et_i__leme.png'
import endkalip from '../görseller/tum/end__striyel_kal__p.png'
import endkontrol from '../görseller/tum/end__striyel_kontrol.png'
import endreklamci from '../görseller/tum/end_reklamci.png'
import endyuvarlakorme from '../görseller/tum/end__striyel_yuvarlak___rme.png'
import enneagram from '../görseller/tum/enneagram.png'
import erkekterzi from '../görseller/tum/erkek_terzili__i.png'
import etikdeger from '../görseller/tum/etik_degerlerve_iletisim.png'
import evcilhayvankuafor from '../görseller/tum/evcil_hayvan_kuafor.png'
import finansalokuryazarlik from '../görseller/tum/finansal_okuryazar_.png'
import gaztesisatsist from '../görseller/tum/gaz_tesisat_sistemleri.png'
import gazyakicicihazlar from '../görseller/tum/gaz_yak__c___cihazlar_ve_servis.png'
import gemidonatimi from '../görseller/tum/gemi_donat__m__.png'
import gemiinsa from '../görseller/tum/gemi_in__a_e__itimi.png'
import goruntuvesessist from '../görseller/tum/g__r__nt___ve_ses_sistemleri.png'
import grafikvefototekgrafik from '../görseller/tum/grafikvefotografteknolojisiegitimi.png'
import guvenliksist from '../görseller/tum/g__venlik_sistemleri.png'
import haberlesmesist from '../görseller/tum/haberle__me_sistemleri.png'
import halidesinatorlugu from '../görseller/tum/halidesinatorlugu.png'
import halitemizleme from '../görseller/tum/hal___temizleme_ve_bak__m_e__itimi.png'
import haritakadastro from '../görseller/tum/harita_kadastro.png'
import hastaveyaslibakim from '../görseller/tum/hasta_ve_yaslı_bakım.png'
import hazirgiyim from '../görseller/tum/hazirgiyimmodelmakineciligi.png'
import helalgidaiçdenetim from '../görseller/tum/helal_g__da.png'
import hububatisleme from '../görseller/tum/hububat_i__leme.png'
import icmekantekressam from '../görseller/tum/i___mekan_teknik_ressaml_______e__itimi.png'
import icmekanvemobtek from '../görseller/tum/i___mekan_ve_mobilya_teknolojisi.png'
import iklimlendirmesist from '../görseller/tum/iklimlendirme_sistemler.png'
import insankaynakyonetimi from '../görseller/tum/insan_kaynaklar__.png'
import iplikureimtekn from '../görseller/tum/iplik___retim_teknolojisi.png'
import isaretdiliegitmenlik from '../görseller/tum/isaret_dili_egitmen.png'
import isaretdiliegittercumanlik from '../görseller/tum/isaret_dili_egitmen.png'
import kadinterziligi from '../görseller/tum/kad__n_terzili__i.png'
import kalitemuh from '../görseller/tum/kalitemuhendisiveyoneticiligi.png'
import kamera from '../görseller/tum/kamera_fotograf.png'
import kanatlihayvan from '../görseller/tum/kanatl___hayvan_yeti__tiricili__i_e__itimi.png'
import karikatur from '../görseller/tum/karikatur.png'
import karosercilik from '../görseller/tum/karosercilik.png'
import kathizmetleri from '../görseller/tum/kathizmetleri.png'
import kaynakcilik from '../görseller/tum/kaynak____l__k.png'
import kazanyakma from '../görseller/tum/kazanyakmavebakimi.png'
import kompazittekneimalati from '../görseller/tum/kompozit_tekne_imalat___e__itimi.png'
import konaklamaveseyahathizoperayon from '../görseller/tum/konaklama_ve_seyahat_hizmetleri_operasyon_e__itimi.png'
import kripto from '../görseller/tum/kripto_dijital_para_strateji.png'
import kumterapisi from '../görseller/tum/kumterapisi.png'
import kurutemizle from '../görseller/tum/kumterapisi.png'
import lojistik from '../görseller/tum/lojistik_e__itimi.png'
import makinebakim from '../görseller/tum/makine_bak__m_onar__m.png'
import mantaryetis from '../görseller/tum/mantar_yeti__tiricili__i.png'
import masalvehikaye from '../görseller/tum/masal_ve_hikaye_anlat__c__l______.png'
import mermerisleme from '../görseller/tum/mermer_i__leme.png'
import metaldograma from '../görseller/tum/metal_do__rama__2_.png'
import metallevha from '../görseller/tum/metal_levha_i__lemecili__i.png'
import metalyuzeyboyama from '../görseller/tum/metal_y__zey_boyama.png'
import meyveyetistiriciligi from '../görseller/tum/meyve_yeti__tiricili__i.png'
import mimarirestorasyon from '../görseller/tum/mimari_restorasyon_e__itimi.pdf.png'
import mobilyaiskeletivedoseme from '../görseller/tum/mobilya_iskeleti_ve_d____eme.png'
import mobilyasusleme from '../görseller/tum/mobilya_s__sleme_sanatlar__.png'
import modelistik from '../görseller/tum/modelistlik.png'
import motorluaraclarlpgsistemleri from '../görseller/tum/motorlu_ara__lar_LPG_sistemleri_bak__m_ve_onar__mc__l_______e__itimi.png'
import motosiklettamirciligi from '../görseller/tum/motosikler_tamircili__i.png'
import muhabirlik from '../görseller/tum/muhabirlik.png'
import networkmarketing from '../görseller/tum/network_marketing.png'
import nlpmaster from '../görseller/tum/nlp_master.png'
import nlp from '../görseller/tum/nlp.png'
import numerolojimaster from '../görseller/tum/numeroloji_master.png'
import numerolojiuygulayici from '../görseller/tum/numeroloji.png'
import ogrencikoclugu from '../görseller/tum/ogrenci_koclugutest.png'
import ormanyetistiriciligi from '../görseller/tum/ormanyetistiriciligi.png'
import otodosemeciligi from '../görseller/tum/oto_d____emecili__i.png'
import otomotivboya from '../görseller/tum/otomotiv_boya_e__itimi.png'
import otomotivelektrikciligi from '../görseller/tum/otomotiv_elektirik__ili__i_e__itimi.png'
import otomotivelektromekanik from '../görseller/tum/otomotiv_elektromekanikerli__i.png'
import oyunterapisi from '../görseller/tum/oyunterapisi.png'
import p4cuygulayici from '../görseller/tum/p4c_uygulay__c__.png'
import pedagojiokulu from '../görseller/tum/Pedagoji_Okulu.png'
import pilatesegitici from '../görseller/tum/Pilates_E__itimi.png'
import plastikisleme from '../görseller/tum/plastik_i__leme.png'
import plastikkalip from '../görseller/tum/plastik_kal__p.png'
import protokol from '../görseller/tum/protokol.png'
import reborntherapyuygulayici from '../görseller/tum/reborn_therapy.png'
import resimanaliziveyorumlama from '../görseller/tum/resimanaliziveyorumlama.png'
import robotikkodlama from '../görseller/tum/robotik_kodlama.png'
import saattamirciligi from '../görseller/tum/saat_tamirciligi.png'
import saatisleri from '../görseller/tum/sacisleriegitimi.png'
import sanayinakisi from '../görseller/tum/sanayi_nak______.png'
import saraciyeuretimi from '../görseller/tum/saraciye___retimi_e__itimi.png'
import saraciyemodelistligi from '../görseller/tum/saraciye_modelistli__i_e__itimi.png'
import satiselamanligi from '../görseller/tum/sat_____elemanl______.png'
import sebzemeyveisleme from '../görseller/tum/sebze_ve_meyve_i__leme.png'
import sebzeyetistiriciligi from '../görseller/tum/sebze_yeti__tiricili__i.png'
import serbestseramiksekillendirme from '../görseller/tum/serbest_seramik_sekillendirme.png'
import sigortacilik from '../görseller/tum/sigortac__l__k.png'
import sogutmasistemleri from '../görseller/tum/so__utma_sistemleri.png'
import sorumlulukvedegerler from '../görseller/tum/sorumluluk_ve_degerler.png'
import sporkoclugu from '../görseller/tum/spor_koclugu.png'
import statikyapiteknikressamligi from '../görseller/tum/statik_yap___teknik_ressaml_______e__itimi.png'
import stres from '../görseller/tum/stresvezamanyonetimi.png'
import suaritma from '../görseller/tum/suaritma.png'
import suurunleri from '../görseller/tum/su___r__nleri_i__leme.png'
import sunuculuk from '../görseller/tum/sunucu.png'
import takiimalat from '../görseller/tum/tak___imalat___e__itimi.png'
import tarlabitk from '../görseller/tum/tarla_bitki_yeti__tiricili__i.png'
import tekstilbaskivedesen from '../görseller/tum/tekstil_bask___desencili__i.png'
import tekstilbitimislemleri from '../görseller/tum/tekstil_bitim_i__lemleri__apre_.png'
import temelastroloji from '../görseller/tum/temelastroloji.png'
import temelilkyardim from '../görseller/tum/temel_ilkyardım.png'
import temizlikkozmetik from '../görseller/tum/temizlikkozmetikveparfüm.png'
import tekstilboyaciligi from '../görseller/tum/tekstil_boyac__l______.png'
import toplulukonundekonusma from '../görseller/tum/topluluk_onunde_konusma.png'
import tornadaformsekillendirme from '../görseller/tum/tornadaformsekillendirme.png'
import uzmankaliteyoneticiligi from '../görseller/tum/uzman_kalite.png'
import viop from '../görseller/tum/viop.png'
import vitrinkuyumculugu from '../görseller/tum/vitrinkuyumculugu.png'
import fitness from '../görseller/tum/fitness.png'
import yapidekorasyonu from '../görseller/tum/yapidekorasyonu.png'
import yapiduvarvesivasist from '../görseller/tum/yap___duvar_ve_s__va_sistemleri_e__itimi.png'
import yapiyalitimi from '../görseller/tum/yap___yal__t__m___e__itimi.png'
import yapiyuzeykaplama from '../görseller/tum/yapiyuzeykaplama.png'
import yasaminsayisalsifreleri from '../görseller/tum/yasamin_sifreleri.png'
import yatinsa from '../görseller/tum/yat_in__a_e__itimi.png'
import yaylienstrüman from '../görseller/tum/yayl___enstr__man_yap__m__.png'
import zeytinisleme from '../görseller/tum/zeytinisleme.png'





import egitim from '../görseller/egitim.jpg'




function redirectToLogin() {
  window.location.href = '/'; // Login sayfasına yönlendir
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

function Education() {
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
            <img src={egitim} alt="Egitim Görseli" className="slider-image" />
            <p className="slider-c">
              
            </p>
          </div>
        </div>
      </div>

      <div className="about-header">
        <br></br>
        <h1>EĞİTİMLERİMİZ</h1>
      </div>



      <section class="about-area them-2 pb-130 pt-50 recent-area">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-5">
            </div>
            
            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kvkk} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>(KVKK) Kişisel Verilerin Korunması Eğitimi</h4>
                      <p >6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) hem özel hem de kamu sektöründe, başta özel hayatın gizliliği olmak üzere, temel hak ve özgürlükleri korumak ve sadece şahısların kişisel verilerini işleyen, gerçek ve tüzel kişilerin, yükümlülüklerini düzenlemek amacıyla oluşturulmuş kanundur.  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={photoshop} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Adobe Photoshop Eğitimi</h4>
                      <p >Adobe’nin profesyonel fotoğraf işleme ve grafik tasarım yazılımı olan Photoshop’u kullanarak; hem tasarım hem de dijital fotoğraf terminolojisine hâkim olacaksınız.  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ahsapdograma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Ahşap Doğrama Teknolojisi Eğitimi</h4>
                      <p >Birçok sektörde kullanılan ahşabın, şekillenmesini sağlayan kişilere ahşap doğrama ustası denir. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ahsapyapi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Ahşap Yapı Sistemleri Eğitimi</h4>
                      <p >Ağaçlardan elde edilen kendi rengi ve dokusu olan organik bir malzemedir. Çatı elemanları, doğrama ve kaplama malzemesi, kalıp ve iskelelerde taşıyıcı ve dekoratif malzeme olarak kullanılmaktadır. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={akilzeka} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Akıl ve Zeka Oyunları Eğitici Eğitimi</h4>
                      <p >Sizler de bu eğitim programını başarı ile tamamladığınızda Akıl Ve Zeka Oyunları Eğitmeni ünvanına sahip olacak yetkinlik belgeniz ile Kamu ve özel kurumlarda eğitmenlik yapabilecek , atölye açabileceksiniz. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={alci} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Alçı Model Kalıp Eğitimi</h4>
                      <p >Alçı model kalıp şekillendirme yeterliklerini kazandırmaya yönelik eğitim programıdır. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={cilingir} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Anahtarcılık ve Çilingirlik Eğitimi</h4>
                      <p >Farklı tip ve modeldeki, anahtar ve kilitlerle ilgili her türlü işlemi yapma, kapılara takılan çeşitli tipte yayların montajı ve bakımını yapma yeterlikleri kazandırmaya yönelik eğitim programıdır. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={aricilik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Arıcılık Eğitimi</h4>
                      <p >Bu eğitimle çevrenizden duyduğunuz belki de yanlış yaptığınız bir çok şeyin doğrusunun nasıl yapıldığını öğreneceksiniz. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={asansor} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Asansör Sistemleri Eğitimi</h4>
                      <p >Bu eğitimle Her türlü asansörün emniyetli ve sorunsuz bir şekilde işlemesini sağlayacak bakım ve onarım işlemlerini, kendi başına ve belirli bir süre içerisinde yapabilme bilgi ve becerisine sahip nitelikli kişileri yetiştirmek amaçlanmaktadır. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={avukatkatip} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Avukat Katipliği Eğitimi</h4>
                      <p >Avukatlık hizmetlerinin bir kısmını, avukatlar adına yerine getiren kâtiplerin mesleki bilgi ve becerilerinin artırılması suretiyle hizmet kalitesinin yükseltilmesine destek olmak. </p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ayakkabimodel} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Ayakkabı Modelistliği Eğitimi</h4>
                      <p >Ayakkabı sanayisine ayakkabı modelistliği yeterliliklerine sahip Ayakkabı Modelistleri yetiştirmek amaçlanmaktadır. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ayakkabiuretim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Ayakkabı Üretimi Eğitimi</h4>
<p>Ayakkabı üretim işlerini iş sağlığı ve güvenliği kurallarına uygun olarak yapabilme bilgi ve becerisine sahip kişiler yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bagcilik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bağcılık Eğitimi(Üzüm Yetiştiriciliği)</h4>
<p>Asma yetiştiriciliğinde şartlara uygun asma bahçesi kurma, kültürel bakım ve meyve hasadı konularını içeren eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bahcivan} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bahçıvanlık Eğitimi</h4>
                      <p >Bahçıvanlık eğitimi, toprağı işleme, bitkileri dikme, çim ekimi yapma ve peyzaj bahçelerinin periyodik bakımını yapma ile ilgili bilgi ve becerileri kapsar. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bakim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bakım ve Onarım Eğitimi</h4>
<p>Bakım- Onarım Yönetimi ile meydana gelebilecek teknik sorunları planlı bakımlarla minimize ederek, üretim sürecinin verimliliğini arttırabilir ve maliyetleri yükselten etkileri en aza indirebilirsiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={balik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Balıkçılık ve Su Ürünleri Eğitimi</h4>
<p>Su ürünleri mevzuatına ait yasa ve yönetmelikleri öğrenme ve uygulama yeterlikleri kazandıran sertifika programıdır</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={beton} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Beton-Çimento ve Zemin Teknolojisi Eğitimi</h4>
<p>Beton-Çimento ve Zemin Teknolojisi Teknisyenliği, inşaatların, imalat tekniğine uygun ve kaliteli olarak yapılabilmesidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={betonarme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Betonarme Kalıp ve Donatı Sistemleri Eğitimi</h4>
<p>Betonarme Kalıp Sistemleri üretimi güncel tasarımlarla sağlanan ve günümüz inşaat sektöründe yaygın bir şekilde kullanılan sistemlerdir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bilgdestend} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bilgisayar Destekli Endüstriyel Modelleme Eğitimi</h4>
<p>Günümüzde Bilgisayar Destekli Endüstriyel Modelleme yeni tasarımları bilgisayar ortamında hazırlayıp prototipi yapmak ve bu ürünlerin model kalıplarını üretmek demektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bildesmak} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bilgisayar Destekli Makine Ressamlığı Eğitimi</h4>
<p>Mühendisler tarafından belirlenen taslak, şema ve ölçüler doğrultusunda ilgili makinelerin bilgisayar destekli çizim ve tasarımlarını gerçekleştirir. Tüm çalışmaların, işletmenin politika, hedef ve talimatlarına uygun şekilde yapılmasından sorumludur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bina} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bina ve Site Yöneticiliği Eğitimi</h4>
<p>Başlangıçta gönüllülük esası ile yürütülmeye çalışılan bu konu, kapsamı açısından oldukça geniş bir hal alması, yöneticiler yasal sorumluluklarını vb. nedenler ile artık bu konuda yetişmiş insanların profesyonel anlamada çalışabilecekleri iş kolu durumuna gelmiştir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bioenerji} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bioenerji Uygulayıcı Eğitimi</h4>
<p>Bioenerji Nedir? Bioenerji , pozitif ve olumlu yönde insanların üzerinde kullanılan bir şifa tekniğidir. Kelime anlamı olarak ifade edildiğinde ise hayat enerjisi, hayat akımı ve doğal enerji olarak adlandırılır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bitkisel} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bitkisel Yağ Üretimi Eğitimi</h4>
<p>İş sağlığı ve tedbirlerine, üretim tekniğine uygun olarak bitkisel sıvı yağ üretim aşamalarını uygulama, ham sıvı yağın rafinasyonu, bitkisel sıvı yağın hidrojenasyonu ile margarin üretilmesi ile ilgili bilgi ve becerileri kazandırmaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={bobinaj} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Bobinaj Eğitimi</h4>
<p>bu eğitimde endüstride kullanılmakta olan elektrik motorları ile elektrik bobini kullanılmakta olan makinelerin ve birçok cihazın arızalarını onaran veya bobinlerin sarım işlemlerini yapabilmesi amaçlanır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={borsa_teknik_analiz} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Borsa Teknik Analiz Eğitimi</h4>
<p>Eğitimimiz, Borsa İstanbul’da yatırımı olan ya da yatırım yapmak isteyen yatırımcılara yönelik, 2 ana analiz metodundan biri olan “Teknik Analiz” metodunun; basit, anlaşılır ve kolay uygulanabilir içeriğini kapsamaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={boya} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Boya üretimi ve Kontrolü Eğitimi</h4>
<p>Tartım, dolum ve karıştırma, ektruder ile boya yoğurma , değirmende boya öğütme işlemleri ile , kuru karışım boya hazırlama, depolama ve sevkiyat, mekanik bakım ve onarımı iş güvenliği ve işçi sağlığı kurallarına uygun olarak gerçekleştiren bireydir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tasisletme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Değerli ve Yarı Değerli Taş İşlemeciliği Eğitimi</h4>
<p>Değerli taşlar, ender bulunuşu, belirli fiziksel ve kimyasal ayrıcalıkları nedeniyle, özel değerdeki malzemelerdir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={cam} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Dekoratif Cam Eğitimi</h4>
<p>Camın kullanıldığı her türlü yüzey ve mekânı geleneksel sanatın birikimlerinden çıkışla, çağdaş bir yaklaşımla değerlendiren ve dekoratif tasarım uygulamaları ile ilgili gerekli düzenlemeleri yapan kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={evtekstili} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Dekoratif Ev Tekstili Eğitimi</h4>
<p>Ev tekstiline ait tekstil ürünlerinin tasarıma uygun süslemelerini yapabilme ve dekoratif örtüler tasarlayarak kullanıma hazır hale getirme becerisinin kazandırıldığı hedefleyen sertifika programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={derigiyim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Deri Giyim Eğitimi</h4>

<p>Deri giysi üretimi, deri giysi kalıpları, deri teknolojisi, tasarım ve model araştırmaları, deri kalite kontrol, iş ve üretim organizasyonu alanlarında bilgi ve yetkinlik sahibi kişilerin yetiştirilmesi için hazırlanmış eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={derisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Deri İşleme Eğitimi</h4>
<p>Deri sanayisinde fabrikalar, atölyeler ve konfeksiyonlar başta olmak üzere çeşitli iş alanlarında çalışabilmektedirler.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={diksiyon} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Diksiyon ve Beden Dili Eğitimi</h4>
<p>Bu eğitim her hareketi anlamlı bir bütün olan insanoğlunun şifrelerini çözmek için gerekli bir eğitimdir. Uygulama ve egzersizler ile sizleri tanıştıracak ve günlük yaşantınızda ayrıcalıklar tanıyacaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={dishekimiasistan} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Diş Hekimi Asistanlığı Eğitimi</h4>
<p>Diş Hekimi Asistanlığı Eğitimi, sektörde faal olarak çalışan ve çalışmak isteyen Diş Hekimi Asistanlarının mesleki ve kişisel gelişimine katkıda bulunarak Diş Hekimi Asistanı Mesleğinin incelik ve gerekliliklerini anlatmak için hazırlanmıştır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={dizelmotor} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Dizel Motorları Yakıt Pompası ve Enjektör Ayarcılığı Eğitimi</h4>
<p>Dizel motor yakıt sistemlerinin bakım ve onarımlarını yapma yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={dokumaoperator} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Dokuma Operatörlüğü Eğitimi</h4>
<p>Dokuma için kullanılan cihazların ayarını yaparken bir yandan da kopan çözgü ipliklerini bağlayan kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={editor} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Editörlük Eğitimi</h4>
<p>Eğitim sonunda kursiyerlerimiz, haber editörü olarak başarılı olması halinde medyalarda istihdam ve staj imkânı yakalayacak. Ayrıca, sosyal medya editörü, haber editörü ihtiyacı olan şirketlerde de çalışma imkânı bulabilirler.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={eldokuma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>El Dokuma Eğitimi</h4>
<p>El Dokuma Eğitimi, ipleri boyama, dokuma araç gereçlerini kullanma, dokumaya hazırlık yapma, dokuma yapma ve dokumayı bitirme yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={elmakinenakisi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>El ve Makine Nakışı Eğitimi</h4>
<p>El ve makine nakışları tekniklerine uygun desen araştırıp hazırlayabilen, araç-gereci işlemeye hazırlayabilen ve el ve makine nakış tekniklerini uygulayabilen kişileri yetiştirmek için hazırlanmış eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={elekevalet} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Elektrikli Ev Aletleri Teknik Servisi Eğitimi</h4>
<p>Soğutma, ısıtma, pişirme, temizlik ve kişisel bakım cihazlarının bakım, onarım ve montajına yapma yeterliklerine sahip teknik elemanlar yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={emlakdan} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Emlak Danışmanlığı Eğitimi</h4>
<p>Emlakçılığı meslek edinmek isteyenlere mesleğin temel bilgilerini öğretip gerekli tüm mesleki bilgi ve deneyime sahip olmalarını sağlayarak mesleğin eğitimini almış insanları emlak sektörüne kazandırmak hedeflenmektedir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endbitkiyet} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstri Bitkileri Yetiştiriciliği Eğitimi</h4>
<p>Üretilip hasat edildikten sonra doğrudan doğruya kullanılmayan ve farklı sanayi kuruluşlarında işlendikten sonra ürün olarak kullanabilen bitkilere endüstri bitkileri denir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endbakim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Bakım ve Onarım Eğitimi</h4>
<p>Fabrika, atölye vb. işletmelerdeki elektrik elektronik sistemlerin bakım ve onarımına ilişkin işlemleri yapma yeterliklerine sahip nitelikli meslek elemanları yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endcam} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Cam Eğitimi</h4>
<p>Cam ölçüsü alıp makine ve elle düz cam kesebilen kenar düzeltmesi yapabilen, düz, damperli ve ısı cam imalatı montaj ve paketleme yapabilen kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endcorap} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Çorap Örme Eğitimi</h4>
<p>Tekstil teknolojisi alanında endüstriyel çorap örme mesleğinin yeterliklerine sahip meslek elemanları yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endduzorme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Düz Örme Eğitimi</h4>
<p>Çeşitli türde (yün, pamuk, sentetik) iplikleri, elektronik düz örme makinelerinde kumaş haline getiren kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endetisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Et İşleme Eğitimi</h4>
<p>Yönetmeliklere uygun olarak tüketime sunulacak taze et ve et ürünlerinin üretimleri, kaliteleri ve üretim süreci kontrolleri ile ilgili bilgi ve becerileri kazandırmaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endkalip} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Kalıp Eğitimi</h4>
<p>Metal veya metal olmayan makine parçalarını presleme yolu ile çok sayıda ve kısa sürede imal etme amacıyla kalıp adı verilen model parçalarının tasarımı ve üretimini yapan kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endkontrol} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Kontrol Eğitimi</h4>
<p>Görsel programlama, PLC programlama, bilgisayar ağı kurma ve bilgisayarla devre çizimleri yapabilen nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endreklamci} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Reklamcı(Tabelacı) Eğitimi</h4>
<p>Dijital ve serigrafi baskı ile imalat yapan, üretilen parçaların birleştirilmesini ve tabela iç montajını yapan ve mesleki gelişim faaliyetlerini yürüten nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={endyuvarlakorme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Endüstriyel Yuvarlak Örme Eğitimi</h4>
<p>Endüstriyel Yuvarlak Örme işlerini iş sağlığı ve güvenliği kurallarına uygun olarak yapabilecek bireyler yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={enneagram} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Ennegram Uygulayıcı Eğitimi</h4>
<p>Yunanca “dokuz nokta” anlamına gelen “Enneagram”, dokuz ayrı kişilik tipini ve bu tipler arasındaki karşılıklı ilişkileri açıklayan ve dünyada gittikçe popülerleşen etkili bir öğretidir. Kökeni çok eskilere dayanan kadim bir öğretidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={erkekterzi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Erkek Terziliği Eğitimi</h4>
<p>Erkek terzisinin sahip olduğu yeterlilikleri kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={etikdeger} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Etik Değerler ve İletişim Eğitimi</h4>
<p>Etik değerler ve iletişim, bir muhabir ve editörün saha çalışmalarında davranış, hal ve hareketleri, basın toplantılarında ve röportajlarda soru sorma teknikleri, iletişim kurma gibi gazetecinin etik, ahlaki ve iletişim kurmasıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={evcilhayvankuafor} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Evcil Hayvan Kuaförlüğü Eğitimi</h4>
<p>İş sağlığı ve güvenliği ile çevre koruma önlemlerini uygulayarak, kalite gereklilikleri çerçevesinde iş organizasyonu yapan, tüy kesimi yapan, evcil hayvanı yıkayan, tırnak ve pati bakımı ile diğer bakımları yapan nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={finansalokuryazarlik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Finansal Okur Yazarlık Eğitimi</h4>
<p>Finansal okuryazarlık, dünyada paranın nasıl kullanıldığını anlayabilme yeteneği ya da kişinin finansı anlayabilme becerisi olarak tanımlanabilir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={gaztesisatsist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Gaz Tesisat Sistemleri Eğitimi</h4>
<p>Doğalgaz kullanımı son derece rahat bir kaynak olsa da tesisat kurulurken tedbirli olunması can sağlığı için büyük önem arz eder.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={gazyakicicihazlar} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Gaz Yakıcı Cihazlar ve Servis Hizmetleri Eğitimi</h4>
<p>Isıtma tesisatı, kat kaloriferi, merkezi ısıtma ve gaz yakıcı cihazların montajını, bakımını ve onarımını yapma yeterliklerine sahip, müşterilerin bilgilendirilmesi ve raporlama faaliyetlerini yapan kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={gemidonatimi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Gemi Donatımı Eğitimi</h4>
<p>Makine dairesi ve üst güverte boru donatım projesini okuyan, donatım elemanlarını üreten, montaj, bakım onarım ve kalite kontrol görevlerini uygulayan teknik elamandır. Gemi donatım elemanları yapımı ve montajından başlayıp kullanıma hazır hale getirilmesinde aktif görev alan personeldir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={gemiinsa} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Gemi İnşa Eğitimi</h4>
<p>Farklı tür ve boyutlardaki gemilerin tasarım, inşa, bakım ve onarımını yapmakla sorumludur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={goruntuvesessist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Görüntü ve Ses Sistemleri Eğitimi</h4>
<p>Görüntü, ses ve ışıklandırma sistemlerinin proje ve kurulum, bakım ve onarım işlemlerini yapma operasyon planlarını çıkarma, kullanma bilgi ve becerisine sahip nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={grafikvefototekgrafik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Grafik ve Fotoğraf Teknolojisi Grafik Eğitimi</h4>
<p>Grafik ve Fotoğraf alanı altında grafikerlik mesleğinin yeterliklerine sahip meslek elemanları yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={guvenliksist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Güvenlik Sistemleri Eğitimi</h4>
<p>Güvenlik sistemlerinin kurulum, bakım ve onarımı sağlık ve güvenlik şartlarına uygun olarak yapabilen bireyler yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={haberlesmesist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Haberleşme Sistemleri Eğitimi</h4>
<p>Haberleşme sistemlerinin kurulum, bakım ve onarımı sağlık ve güvenlik şartlarına uygun olarak yapabilen bireyler yetiştirmektir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={halidesinatorlugu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Halı Destinatörlüğü Eğitimi</h4>
<p>Halı desinatörü, üretilecek olan halılar için müşteri tarafından sipariş edilen ya da ürün grubu tarafından talep edilen desenleri hazırlar. Doğrudan bilgisayar üzerinde çizim yapar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={halitemizleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Halı Temizleme ve Bakım Eğitimi</h4>
<p>İş sağlığı ve güvenliği, çevre koruma ve kalite sağlamaya ilişkin gereklilikleri yerine getirerek; iş organizasyonu yapan, halıları temizlemeye hazırlayan, temizleme ve bakım işlemlerini yapan, mesleki gelişim çalışmalarına katılan nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={haritakadastro} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Harita Kadastro Eğitimi</h4>
<p>İmar, yol, kadastro gibi projelerin alt yapısını oluşturan harita ve planların yapımı ve uygulama işlemlerinde uygulayıcı olarak ara insan gücünü yetiştiren eğitimdir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={hastaveyaslibakim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Hasta ve Yaşlı Bakımı Eğitimi</h4>
<p>Bu eğitimi alan kişiler hasta ve yatalak yaşlı kişilerin bireysel bakımı ve danışmanlığı altında ilaç kontrolleri, tedavi süreçleri yönetimi, vücut temizliği ve beslenme alanları ile ilgili araç ve gereçleri yerinde ve zamanında kullanabilme becerilerine sahip kişiler haline gelirler.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={hazirgiyim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Hazır Giyim Model Makineciliği Eğitimi</h4>
<p>Modelist tarafından verilen dikim talimatına göre model ve malzeme özelliğine uygun dikiş tekniklerini uygulayarak numune dikimi yapma, iş geliştirmeye yönelik önerilerde bulunma bilgi ve becerisine sahip nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={helalgidaiçdenetim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Helal Gıda İç Denetçi Eğitimi</h4>
<p>Ürünlerin paketlenmesi, etiketlenmesi, taşınması, servis ve lojistik faaliyetlerine ayrıca otelcilik, se yahat, eczacılık, kozmetik ve ilgili cihazlar ile diğer sağlık ürünlerine ilişkin özellikleri de içine almaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={hububatisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Hububat İşleme Eğitimi</h4>
<p>Türk Gıda Mevzuatına uygun olarak hijyenik ortamda hububat ve ürünleri üretimi için iş organizasyonunu yapan, gerekli hammadde ile üretimde kullanılan araç-gereçleri tanıyıp kullanabilen, kontrol edebilen, basit bakım ve temizliğini yapabilen, ürünü ambalajlama ve depolama işlerini yapabilen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={icmekantekressam} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İç Mekan Teknik Ressamlığı Eğitimi</h4>
<p>Krokisi hazır olan resmi, mimari projeyi , çizim araç ve gereçlerini kullanıma hazırlayarak el ve bilgisayarla iç mekan projelerini çizmek, rölöve yapmak ve çıktı almak, çizimleri kullanıma hazırlamak ile bunlara ait hesap ve teknik çizimlerini yapan nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={icmekanvemobtek} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İç Mekan ve Mobilya Teknolojisi Eğitimi</h4>
<p>Mobilya ve iç mekân tasarımı alanında mobilya ve iç mekân teknolojisi mesleğinin gerektirdiği iç mekân ve mobilya elemanlarının üretimi yeterliklerine sahip meslek elemanlarının yetiştirilmesi amaçlanmaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={iklimlendirmesist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İklimlendirme Sistemleri Eğitimi</h4>
<p>Kapalı bir ortamın sıcaklık, nem, temizlik ve hava hareketini insan sağlık ve konforuna göre ayarlama işlemine iklimlendirme denir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={insankaynakyonetimi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İnsan Kaynakları Yönetimi Eğitimi</h4>
<p>Kamudan özel sektöre tüm kurum ve kuruluşlarda, işletmelerde, akademik platformlarda İnsan Kaynakları Yönetimi’ne özellikle önem verilmektedir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={iplikureimtekn} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İplik Üretim Teknolojisi Eğitimi</h4>
<p>Makinelerde gerekli ayarları, makine temizlik ve bakım işlemlerini yapma bilgi ve becerisine sahip iş güvenliği ve kurallarına uyan, nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={isaretdiliegittercumanlik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İşaret Dili Eğitmenlik ve Tercümanlık Eğitimi</h4>
<p>Bu eğitim sonunda işitme engelli bireyler ile iletişim kurabilecek, meslek olarak ilerlemeyi düşürseniz; vezne, hastane, telekomünikasyon firmaları ve yoğun olan bir çok kurumsal firmada iş bulma imkânınız olacaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={isaretdiliegitmenlik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>İşaret Dili Temel Eğitimi</h4>
<p>İşaret Dili Temel Eğitimi'ni, işaret dilini öğrenmek ve kariyer anlamında kendini geliştirmek isteyen herkes alabilir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kadinterziligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kadın Terziliği Eğitimi</h4>
<p>Kadın terzisinin sahip olduğu yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kalitemuh} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kalite Mühendisliği ve Yöneticiliği Eğitimi</h4>
<p>Kalite Mühendisliği kurum ve kuruluşların stratejik planlama, pazarlama, ürün planlama, ürün tasarımı, üretim gibi süreçlerini en doğru, en efektif ve en etkin şekilde planlamasını, uygulanmasını, uygulama ardından performanslarının izlenmesini sağlar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kamera} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kamera-Fotoğrafçılık Eğitimi</h4>
<p>Eğitimin sonunda edineceğiniz bilgi ve becerilerle fotoğraf makineleri ve kameraların temel parçalarını, aksesuarlarını tanıyacak ve kullanabileceksiniz. Habere konu olacak görselleri daha iyi seçebilecek, anı yakalayabileceksiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kanatlihayvan} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kanatlı Hayvan Yetiştiriciliği Eğitimi</h4>
<p>Bu eğitimle, katılımcılara etlik piliç kümesleri, kullanılan hayvan genotipleri, Kümeslerin hazırlanması, hayvanların bakımı ve beslenmesi, rasyon hazırlama, etlik piliç hastalıkları, sağlık koruma tedbirleri ve biyogüvenlik uygulamaları konusunda teorik ve pratik bilgiler verilecektir. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={karikatur} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Karikatür Eğitici Eğitimi</h4>
<p>Eğitimin içerisinde karikatür hakkında tüm bilgiler verilmektedir. Bu kapsamda çizim yapma teknikleri, anatomi bilgileri, perspektif bilgileri, karakter yaratma teknikleri ve espri bulma gibi pek çok alanda eğitimler verilmektedir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={karosercilik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Karosercilik Eğitimi</h4>
<p>Karoserci, kendi başına ve belirli bir süre içerisinde, otobüs, midibüs ve minibüslerde şase örme, iskelet çatma, iskeleti sacla kaplama, aksesuar montajı yapma, hasarlı kısımları sökme ve onarma bilgi ve becerisine sahip nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kathizmetleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kat Hizmetleri Eğitimi</h4>
<p>Kat hizmetleri departmanının en iyi şekilde hizmet vermesi otelin geleceği için çok önemlidir. Çünkü misafirlerin tesiste ya da odalarda ilk dikkat edeceği konu temizlik, hijyen ve tüm hizmetlerin çalışır durumda olmasıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kaynakcilik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kaynakçılık Eğitimi</h4>
<p>Kaynaklı imalat yapan işletmelerde kaynakçı olarak çalışanların ve çalıştırılacakların, kullandıkları kaynak metotlarına uygun yeterlilikte eğitim almalarını sağlamaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kazanyakma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kazan Yakma ve Bakımı Eğitimi</h4>
<p>Merkezi ısıtma sistemlerinde ön hazırlık, temizlik, bakım ve kontrollerini yapması, katı yakıtlı kazan yakma kurallarına uygun işlemi gerçekleştirmesi sıvı yakıtlı kazan yakma kurallarına uygun yakma işlemini gerçekleştiren kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kompazittekneimalati} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kompozit Tekne İmalatı Eğitimi</h4>
<p>Tekne yapımının sahip olduğu, tekne resmi, tekne iskeleti, kamara üretimi yapma yeterlikleri kazandırmaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={konaklamaveseyahathizoperayon} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Konaklama ve Seyahat Hizmetleri Operasyon Eğitimi</h4>
<p>Operasyon elemanı günlük, haftalık tur programları hazırlayan, havaalanında konukları karşılayıp havaalanı işlemlerine yardımcı olan, konukların transferler için alınış ve dağıtım saatlerini belirleme bilgi ve becerisine sahip sorumluluk alan, nitelikli kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kripto} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kripto 'Dijital Para' Uzmanlık Eğitimi</h4>
<p>Sizlerde bu eğitim ile üst seviye konuların tamamına hâkim olacak, farklı kişilerin de dijital paralarını yönetebileceksiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kumterapisi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kum Terapisi Eğitimi</h4>
<p>Kum Terapisi , danışanların tamamen kendileri olmalarına olanak verir. İlgili , kabul edici ve uyumlu bir ilişkinin olduğu Kum Terapisi sürecinde çocuklar , yetişkinler ve aileler kişiliklerini tümü ile ifade edebilirler.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={kurutemizle} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Kuru Temizleme Eğitimi</h4>
<p>Bu eğitim ile; Gerekli ortam sağlandığında tekniğine uygun olarak kuru temizleme yapabileceksiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={lojistik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Lojistik Eğitimi</h4>
<p>Ham maddeden tüketiciye kadar bir zincirde, doğru ürünün, doğru miktarda, doğru biçimde, doğru kaynaktan, doğru yolla ve doğru fiyata doğru malzemenin doğru zamanda, doğru şekilde, bulundurulmasını sağlayan faaliyetlerin tümüdür.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={makinebakim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Makine Bakım Onarım Eğitimi</h4>
<p>Çalıştığı kurumun amiri ya da işvereni tarafından kendisine verilen bakım ve onarım görevlerini yürüten kişidir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={mantaryetis} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Mantar Yetiştiriciliği Eğitimi</h4>
<p>Bu eğitim programı ile kültür mantarının ekim, hasat, paketleme ve muhafaza yöntemlerini öğreneceksiniz.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={masalvehikaye} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Masal ve Hikaye Anlatıcılığı Eğitimi</h4>
<p>Bu eğitim ile birlikte, Masalların etkili ve gizemli dünyasını keşif edecek, hikâyenin gücüyle ikna kabiliyeti geliştirmeyi öğrenecek, anne ve babalar çocuklarına farklı tarzda eğitici ve öğretici masallar okuyabileceklerdir.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={mermerisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Mermer İşleme Eğitimi</h4>
<p>Eğitimin Amacı: Katılımcılarımıza mermer imalatı yapılacak alandan ölçü alma, atölye ortamında mermer kesme ve işleme makinelerini kullanarak mermer ürün imalatını yapma yeterlikleri kazandırmaktır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={metaldograma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Metal Doğrama Eğitimi</h4>
<p>Bu eğitim ile Çeşitli şekil ve özellikteki alüminyum, demir, çelik, bakır ve diğer metal parçaları el aletleri, makineler ve bilgisayar kontrollü tezgâhlar yardımıyla kesme, soğuk olarak şekillendirme, doğrultma, birleştirme ve yerine montaj işlemlerini yapabilme bilgisi vermek amaçlanmaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={metallevha} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Metal Levha İşlemeciliği Eğitimi</h4>
<p>Bu Eğitimle İş sağlığı ve güvenliği ile çevre koruma önlemlerini uygulayarak iş organizasyonu yapan, metal malzemelere şekil verme ve iş sonrası işlemleri yapan nitelikli kişileri yetiştirmek amaçlanmaktadır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={metalyuzeyboyama} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Metal Yüzey Boyama Eğitimi Eğitimi</h4>
<p>Bu eğitim programı ile; metal yüzeylerin boyanması ve korunması ile ilgili yöntem ve tekniklerini öğreneceksiniz.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={meyveyetistiriciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Meyve Yetiştiriciliği Eğitimi</h4>
<p> Meyvelerin yetiştirilmesi, hasadı ve pazarlanması yeterliklerini kazandırmaya yönelik programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={mimarirestorasyon} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Mimari Restorasyon Eğitimi</h4>
<p>Mimari Restorasyon, bir mülkün biçimini, özelliklerini ve karakterini, tarihinin diğer dönemlerinden çıkarılması ve eksik özelliklerin mülkten yeniden inşası yoluyla belirli bir zamanda ortaya çıktığı gibi doğru bir şekilde tasvir etme eylemi veya sürecini konu alan bir disiplindir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={mobilyaiskeletivedoseme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Mobilya İskeleti ve Döşeme Eğitimi</h4>
<p>Bu eğitimde Mobilya ve iç mekân tasarımı alanında mobilya iskeleti ve döşemesi mesleğinin gerektirdiği mobilya iskeleti ve döşemesi yapma yeterliklerine sahip meslek elemanlarının yetiştirilmesi amaçlanmaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={mobilyasusleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Mobilya Süsleme Eğitimi</h4>
<p>Her türlü ahşap ve ahşaptan yapılmış yapay malzeme üzerinde tasarımı yapılan model veya şekli, özel kesici aletlerle oyma, kakma ve tornalama tekniklerine uygulayarak işleyen ve şekil veren kişiye Mobilya Süsleme Sanatları Ustası denir. Bu Eğitimle Mobilya Süsleme Ustaları yetiştirme hedeflenir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={modelistik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Modelistlik Eğitimi</h4>
<p>Modelist, tasarımcı tarafından belirlenmiş tekstil ürününün, seri üretimde kullanılmak üzere uygun ölçülerde hazırlanmasını sağlar ve kalıbını oluşturur. Ürünün kalıp ve kullanılacak malzemesini tespit ederek, numune dikiminin yapılmasını sağlar. Serileme işlemi yapar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={motorluaraclarlpgsistemleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Motorlu Araçlar LPG Sistemleri Bakım ve Onarım Eğitimi</h4>
<p>Motorlu araçlara LPG yakıt sistemlerinin montajı, LPG’ li motorların bakım ve onarımlarını yapma yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={motosiklettamirciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Motosiklet Tamirciliği Eğitimi</h4>
<p>Motosiklet sistemlerinin, bakım ve onarımlarını yapma yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={muhabirlik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Muhabirlik Eğitimi</h4>
<p>Motosiklet sistemlerinin, bakım ve onarımlarını yapma yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={networkmarketing} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Network Marketing Eğitimi</h4>
                      <p>Network Marketing Endüstrisi, yeni yüzyılın modern anlayış yapısıyla geliştirilmiş ve üretici ile tüketiciyi doğrudan buluşturan ve bunu e ticaret sisteminin alt yapısını kullanarak hayata geçiren etkili ve yeni nesil pazarlama modelidir.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={nlp} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>NLP Master Practitioner Eğitimi</h4>
                      <p>NLP, günlük olarak farkında olmadan yaptığın davranışlarını bilinçli hale getirmektir. NLP genel olarak kendi içinize doğru yaptığınız bir yolculuktur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={nlp} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>NLP Practitioner Eğitimi</h4>
<p>NLP, günlük olarak farkında olmadan yaptığın davranışlarını bilinçli hale getirmektir. NLP genel olarak kendi içinize doğru yaptığınız bir yolculuktur.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={numerolojimaster} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Numeroloji Master Eğitimi</h4>
<p>Kişinin kendini tanıması ve bu farkındalıkla geçmişini gözden geçirip, bundan sonraki hayatını tekrar planlaması için muazzam bir çalışmadır numeroloji.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={numerolojiuygulayici} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Numeroloji Uygulayıcı Eğitimi</h4>
<p>Kişinin kendini tanıması ve bu farkındalıkla geçmişini gözden geçirip, bundan sonraki hayatını tekrar planlaması için muazzam bir çalışmadır numeroloji.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ogrencikoclugu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Öğrenci Koçluğu Eğitimi</h4>
<p>Bu eğitim ile öğrencinin kendini tanıması, hedefler belirlemesi, sorumluluk duygusu geliştirmesine yardımcı olunması, karşılaşabileceği problemlerle baş etme becerisini geliştirmek amaçlanmaktadır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={ormanyetistiriciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Orman Yetiştiriciliği Eğitimi</h4>
<p>Çalışma süreçlerindeki olası İSG tehlike ve riskleri ile önlemlerini açıklar.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={otodosemeciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Oto Döşemeciliği Eğitimi</h4>
<p>Oto Döşemeci: Otomobil, kamyon, tren, vapur, uçak ve ağır hizmet tipi taşıtlarda ahşap, metal veya plastikten iskeletler üzerine kumaş veya sentetik deri ile döşeme, kaplama, onarım ve montaj işlerini yapan kişidir. Bu eğitimle bu konudaki bilgi ve becerilerin kursiyerlere kazandırılması hedeflenir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={otomotivboya} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Otomativ Boya Eğitimi</h4>
<p>Motorlu araçların, gövde yüzeylerini boyaya hazırlama, boya uygulama ve boya sonrası işlemlerini yapma yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={otomotivelektrikciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Otomotiv Elektrikçiliği Eğitimi</h4>
<p>Otomotiv Elektrikçisi, binek, hafif ve ağır hizmet tipi araçlardaki (iş makineleri ve traktörler dahil) elektrik donanımının bakım, onarım ve montajına (elektronik parçaların montajları dahil) ilişkin işlemleri kendi başına ve belirli bir süre içerisinde yapma bilgi ve becerisine sahip kişidir.</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={otomotivelektromekanik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Otomotiv Elektromekanik Eğitimi</h4>
<p>Otomotiv elektromekaniklerinin sahip olması gereken otomotiv üzerinde mekanik, elektrik ve elektronik aksamların bakım ve onarımlarını yapma yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={oyunterapisi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Oyun Terapisi Eğitimi</h4>
<p>Oyun terapisi ile çocukların duygularını, temel ihtiyaçlarını, sevgi ve nefretlerini, saldırganlıklarını ve birçok davranışlarının altında yatan temel nedenleri öğrenilebilir, çocukların duygusal dünyalarına girilebilir, sorunlarına yardımcı olunabilir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={p4cuygulayici} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>P4C Uygulayıcı (Kolaylaştırıcı) Eğitimi</h4>
<p>Öncelikle Okul öncesi öğretmenleri, sınıf öğretmenleri, branş öğretmenleri her branştan eğitimciler. En başta kendi çocukları olmak üzere, çevresindeki çocuklar ile felsefik oturumlar düzenlemek isteyen tüm bireyler bu eğitimi alabilirler.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={pedagojiokulu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Pedagoji Okulu Eğitimi</h4>
<p>Türkiye'nin en kapsamlı ve alanında tek olan 'Pedagoji Okulu' eğitimine katılarak Çocuk Ve Ergen Ruh Sağlığı Alanında Yetkin Bilgiye Sahip Olacaksınız.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={pilatesegitici} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Pilates Eğitici Eğitimi</h4>
<p>Pilates eğitmenlik eğitimi ile özel pilates salonları yada spor salonlarında pilatesi uygulayabilecek nitelikli pilates eğitmenlerinin yetiştirilmesi amaçlanmaktadır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={plastikisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Plastik İşleme Eğitimi</h4>
<p>Plastik üretim teknolojileri ve üretim süreci yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={plastikkalip} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Plastik Kalıp Eğitimi</h4>
<p>Plastik kalıp teknolojileri ve kalıp üretimi yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={protokol} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Protokol,Görgü ve Nezaket Kuralları Eğitimi</h4>
<p>Protokol kelimesi geniş anlamda iş ve sosyal yaşamda uygulanması gereken kurallar toplamıdır. Protokol kuralları, önce işletmenin iş saygınlığının koruyucusu olduğu kadar, işletmeler arası ilişkilerde şekil yönünden izlenmesi gereken yolu gösterir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={reborntherapyuygulayici} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Reborn Therapy Uygulayıcı Eğitimi</h4>
<p>Reborn Therapy Bilinçaltı temizleme ve programlama uygulamasıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={resimanaliziveyorumlama} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Resim Analizi ve Yorumlama Eğitimi</h4>
<p>Resim Analizi çocuğun çizmiş olduğu resim aracılığıyla çocuğu tanımak, anlamak ve duygu ve düşünceleri hakkında bilgi sahibi olmaktır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={robotikkodlama} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Robotik Kodlama Eğitici Eğitimi</h4>
<p>Robotik Kodlama problem çözme ve öğrencilerin karar verme ve çözüm üretme yeteneklerini geliştirmek için kullanılan bir öğretim yöntemidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={saattamirciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Saat Tamirciliği Eğitimi</h4>
<p>Kol, cep, pano, meydan, duvar, masa saati gibi her türlü mekanik, elektrikli ve elektronik saatlerin bakım ve tamirini yapan kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sanayinakisi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sanayi Nakışı Eğitimi</h4>
<p>Nakış desen programında dikiş, sarma, kompleks dolgu, yazı yazma teknikleri ile desenler hazırlayarak sanayi makinesinde işleme bilgi ve becerisine sahip kişileri yetiştirmektir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={saraciyemodelistligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Saraciye Modelistliği Eğitimi</h4>
<p>Temel saraciye tasarımı yaparak, koleksiyon hazırlar. Tasarımını yaptığı saraciye ürününden numune yapar. Elde ve bilgisayarda saraciye kalıpları çıkarır. Bilgisayarda çizim ve üç boyutlu model yapar.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={saraciyeuretimi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Saraciye Üretimi Eğitimi</h4>
<p>Makine parçalarının imalat resimlerini teknik resim standartları ve kurallarına uygun çizebilir. Temel ayakkabı ve saraciye üretimi yapabilir. Standartlara göre test yapar, tekniğe ve modaya uygun saraciye üretimi yapabilir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={satiselamanligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Satış Elemanlığı Eğitimi</h4>
<p>Satış elemanlığının gerektirdiği satış işlemlerini yürütme, stok faaliyetlerini yapma ve bunlarla ilgili belgeleri düzenleme yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sebzemeyveisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sebze ve Meyve İşleme Eğitimi</h4>
<p>Hijyenik şartlarda sebze ve meyve ürünlerinin teknolojik üretimi yapma yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sebzeyetistiriciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sebze Yetiştiriciliği Eğitimi</h4>
<p>Sebzelerin yetiştirilmesi, hasadı ve pazarlanması yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={serbestseramiksekillendirme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Serbest Seramik Şekillendirme Eğitimi</h4>
<p>Seramik hammaddesi ile sıfırdan şekillendirme işlemlerini kullanarak fonksiyonel ürünler işlerini sağlık ve güvenlik şartlarına bağlı olarak yapabilen kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sigortacilik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sigortacılık Eğitimi</h4>
<p>Bu eğitimimizde, genel olarak sigorta ve sigorta poliçelerinin işleyişi konuları ele alınmakta olup; sigortacılık alanında çalışan ya da kariyer yapmayı planlayan kişilere fayda sağlamak hedeflenmiştir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sogutmasistemleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Soğutma Sistemleri Eğitimi</h4>
<p>Belirli bir alanın istenen soğuklukta tutulabilmesi adına iç ortamdan dış ortama enerji transferi yaparak ısı kaybının karşılanması ile beraber çalışan sistemlerdir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sorumlulukvedegerler} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sorumluluk ve Değerler Eğitimi</h4>
<p>Günümüzde toplumsal ve kültürel değerlerde meydana gelen bozulmalar, değerlerin önemini kaybetmesi ve değersizleşmenin adeta bir değer olarak algılanmaya başlanması, değer eğitimini gündeme getirmiştir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sporkoclugu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Spor Koçluğu Eğitimi</h4>
<p>Günümüz trendi ve en gözde mesleği haline gelen spor koçluğuna sizler de bu eğitim ile başarılı bir kariyer hayatına adım atabilirsiniz.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={statikyapiteknikressamligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Statik Yapı Teknik Ressamlığı Eğitimi</h4>
<p>Statik Yapı Teknik Ressamı : İnşaat teknolojisi alanında mimari projeleri hazır olan çizimlerin, betonarme ve statik projelerini el veya bilgisayarla çizen ve bu çizimlerin çıktıları doğrultusunda proje katlaması yaparak proje dosyası oluşturan nitelikli kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={stres} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Stres ve Zaman Yönetimi Eğitimi</h4>
<p>Programın amacı, zaman ve stres kavramını harmanlayıp zamanı stressiz şekilde kullanmayı sağlarken buna bir çeşit beden terbiyesi de diyebiliriz.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={suaritma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Su Arıtma Sistemleri Eğitimi</h4>
<p>Suyun korunması ve uygun şekilde kullanılmasının katılımcılara kavratılmasıdır. Bununla birlikte atık sular, su kirliliği ve su kalitesi ölçümleri de eğitimin ana konularını oluşturmaktadır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={suurunleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Su Ürünleri İşleme Eğitimi</h4>
<p>Su ürünlerini bozulmadan saklayabilmek ve sağlıklı bir şekilde tüketiciye ulaştırmak için hammaddenin özelliği de göz önünde tutularak uygulanan işlemlere su ürünleri işleme teknolojisi denir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={sunuculuk} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Sunuculuk-Spikerlik Eğitimi</h4>
<p>Sunuculuk – Spikerlik Eğitimi’nin amacı, bu meslek gruplarında yer almak isteyen kişilere gerekli bilgi ve becerilerin kazandırılmasıdır. Garantili iş ve staj imkânı sağlayan eğitim programımız; her yönü ile donanım kazanmış sunucu – spiker adayları yetiştirmeyi amaçlar.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={takiimalat} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Takı İmalatı Eğitimi</h4>
<p>Takı İmalat Ustası: İmalatı yapılacak olan her türlü takıyı, kuyumculuk tekniklerini kullanarak tasarlayan, ölçülerini belirleyerek kağıda aktaran ve üretimini yapabilen nitelikli kişidir. Bu eğitim takı imalatçılığı hakkında gerekli bilgi ve beceriyi kazandırmayı hedeflemektedir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tarlabitk} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Tarla Bitkileri Yetiştiriciliği Eğitimi</h4>
<p>Bu eğitim ile tarla bitkilerinin tür ve çeşitlerini ve bunlara ait genel özelliklerin neler olduğunu öğrenecek ve temel ilkelerini kavrayabileceksiniz.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tekstilbaskivedesen} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Tekstil Baskı ve Desenciliği Eğitimi</h4>
<p>Tekstil baskıcılığı ile ilgili birimlerde planlama yaparak amaçlar doğrultusunda her türlü makineyi kullanarak tüm ürünlere baskı yapan ve bilgisayar ve desen programlarını kullanan, kumaş analizi ve tasarımı yapan kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tekstilbitimislemleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Tekstil Bitim İşlemleri(Apre) Eğitimi</h4>
<p>Tekstil materyalinin ön terbiye ve renklendirme işlemleri sonrası terbiye işletmesini terk etmeden önce, gördükleri mekanik ve kimyasal tüm işlemlere bitim işlemleri veya apre işlemleri denir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={temelastroloji} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Temel Astroloji Eğitimi</h4>
<p>Astroloji, göksel cisimlerin hareketleri ve konumları ile insan hayatı arasındaki ilişkileri inceleyen bir bilim dalıdır. Eğer astroloji ile ilgileniyor ve bu alanda daha fazla bilgi edinmek istiyorsanız bu eğitim tam size göre</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={temelilkyardim} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Temel İlk Yardım Eğitimi</h4>
<p>Bu eğitim ile acil bir durum karşısında profesyonel ekipler gelene kadar, yanlış müdahalelerden kaçınarak hasta/yaralıya hızlı, etkin ve en uygun müdahalede bulunmak için gerekli bilgi ve beceriyi kazandırmak amaçlanmaktadır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={temizlikkozmetik} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Temizlik,Kozmetik ve Parfümeri Ürünleri Üretimi Eğitimi</h4>
<p>Temizlik ürünleri ve özellikleri, temizlik ürünlerinin üretimi, kozmetik  ürünleri ve özellikleri, kozmetik ürünlerinin üretimi, parfümeri ürünleri ve özellikleri, parfümeri ürünlerinin üretimi alanlarında bilgi ve yeterliliğe sahip bireyler yetiştirmektir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tekstilboyaciligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Tekstil Boyacılığı Eğitimi</h4>
<p>Tekstil hammaddesi olan ham haldeki lif, iplik, elyaf, kumaş (örme veya dokuma) malzemeleri ve hazır giysi formundaki tekstil mamullerinin renklendirilmesini yapan kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={toplulukonundekonusma} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Topluluk Önünde Konuşma ve Hitabet Eğitimi</h4>
<p>Bu eğitim ile topluluk önü konuşmalarında nelere dikkat edilmesi gerektiği, heyecan, stres gibi durumların yönetimi, ikna yöntemleri ve özgüvenli konuşmalar yapabilmeyi öğrenecek ve uygulayabileceksiniz.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={tornadaformsekillendirme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Tornada Form Şekillendirme Eğitimi</h4>
<p>Çark tornasında serbest el ile farklı şekil ve yapıdaki çeşitli formları şekillendirerek basit dekorlar yapabilen, şablon tornasında iç ve dış sıvama yöntemleri ile çeşitli formları şekillendirebilen, şekillendirme, kurutma, rötuş, astarlama ve bisküvi pişirimi teknik bilgisine sahip nitelikli kişi.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={uzmankaliteyoneticiligi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Uzman Kalite Yöneticiliği Eğitimi</h4>
<p>Başarılı bir kalite yönetimi; kurum ve kuruluşların stratejik planlama, pazarlama, ürün planlama, ürün tasarımı, üretim gibi süreçlerini en doğru, en efektif ve en etkin şekilde planlamasını, uygulanmasını, uygulama ardından performanslarının izlenmesini sağlar.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={viop} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>VİOP Vadeli İşlem ve Opsiyon Piyasası Eğitimi</h4>
<p>VİOP ; Borsa İstanbul bünyesinde işlem gören sermaye piyasası araçları üzerine düzenlenmiş vadeli işlem ve opsiyon sözleşmeleri ile diğer türev araçlarının elektronik ortamda alım ve satımının yapıldığı piyasaların kısa adıdır</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={vitrinkuyumculugu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Vitrin Kuyumculuğu Eğitimi</h4>
<p>Değerli maden ve taşlardan oluşan takı ve süs eşyalarının vitrinde estetik bir zevke göre düzenlenmesini yapan ve satış faaliyetlerini yürüten kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={fitness} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Vücut Geliştirme ve Fitness Eğitmenliği Eğitimi</h4>
<p>Fitness Eğitmenliği Eğitimi ile atletik performans, sürat, kuvvet ve dayanıklılık gibi vücudu daha fonksiyonel ve performansa yönelik olarak kullanabilmelerinin yanı sıra bu alanlarda eğitim verebilecek yeterliliği kazanırlar.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yapidekorasyonu} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yapı Dekorasyonu Eğitimi</h4>
<p>Yapıların iç ve dış cephelerinin boya, alçı, dekorasyon ve kartonpiyer, dökme tavan, bölme duvar, duvar giydirme yapımı, renk tasarımı ve yapı dekorasyon onarım işleri ile bunlara ait hesap ve teknik çizimleri yapan kişileri yetiştirmektir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yapiduvarvesivasist} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yapı Duvar ve Sıva Sistemleri Eğitimi</h4>
<p>Yapıda duvarcılık , duvar çizimleri ve sıva konusunda yeterliklerini kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yapiyalitimi} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yapı Yalıtımı Eğitimi</h4>
<p>Tüm alt ve üst yapılarda, yapının ekonomik ömrünün uzatılması, tasarruf sağlanması ve yaşam konforunun artırılması amacına yönelik olarak ısı, su, ses ve yangın yalıtımı uygulamalarına ilişkin işlemleri yapan kişileri yetiştirmektir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yapiyuzeykaplama} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yapı Yüzey Kaplama Eğitimi</h4>
<p>Yapıda Sıva yapma, Seramik karo kaplama, parke taşı kaplama Yapay ve suni taş kaplama, mermer kaplama, denizlik-parapet-harpuşta-söve montajı konusunda yeterlikleri kazandırmaya yönelik eğitim programıdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yasaminsayisalsifreleri} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yaşamın Sayısal Şifreleri Eğitimi</h4>
<p>Yaşamın Şifreleri Eğitimi; hayatın bir matematiği, sayıların Pisagor’dan bu yana bir sistemi, sayıların, harflerin bir titreşimi bunun da vücudumuzda belli çakralara etkisinin olduğunu anlatan bir programdır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yatinsa} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yat İnşa Eğitimi</h4>
<p>Yat İnşa Teknisyeni: Yatların tasarım, üretim, çizim, montaj, bakım onarım ve kalite kontrol görevlerini hazırlayıp uygulayan, tüm bu aşamalarda görev alan kişidir.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={yaylienstrüman} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Yaylı Enstrüman Yapımı Eğitimi</h4>
<p>Bu eğitim ile yaylı enstrüman yapımının gerektirdiği bilgi ve becerilerinin kazandırılması amaçlanmaktadır.</p>                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="single-recent-cap mb-30 ">
                    <div class="recent-img text-center">
                    <img src={zeytinisleme} alt="Profil 1" className="profile-image" />

                    </div>
                    <div class="recent-cap pb-5">
                      <span class="btn btn-primary btn-sm"></span>
                      <h4>Zeytin İşleme Eğitimi</h4>
<p>Zeytin mahsulünün işlenmesini, kimyasal ve mikrobiyolojik analizlerinin yapılarak kalitesinin belirlenmesini, sonuçların yorumlanmasını ve doğru karar verebilme becerilerine sahip olan bireyler yetiştirmektir</p>                    </div>
                  </div>
                </div>
              </div>
            </div>
</section >










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
          </div >
          );
}

export default Education;
