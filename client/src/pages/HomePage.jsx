// Home.jsx
import React from 'react';
import InstagramPosts from '../components/InstagramPosts/InstagramPosts';

const HomePage = () => {
  return (
    <div className="homePage-container">
      
      <InstagramPosts />
      <div className="homePage-content">
        <div className="homePage-text-container">
          <h1>Kenta'ya Hoş Geldiniz!</h1>
          <span>Yıldız Teknik Üniversite'sinden 2022 yılında mezun olmuş iki plancı olarak kariyerimize başlarken okul hayatımızda yaşadığımız zorlukları düşündük ve bu zorluklara yönelik öğretici ve eğlenceli içerikler oluşturmak amacıyla sayfamızı kurmaya karar verdik.
Aynı insanlarda olduğu gibi kentlerinde parmak izlerinin olduğu bakış açısıyla yola çıktığımız logomuzla sizlere, özgün değerleri olan ve dinamizmleriyle birbirinden tamamen ayrışan kentleri ve onlara ilişkin bileşenleri aktarmak istiyoruz.</span>
        </div>
        <div className="homePage-button-container">
          <a href="/about" className="homePage-button homePage-primary">
            <span>Daha Fazlasını Öğren</span>
          </a>
          <a href="/contact" className="homePage-button homePage-secondary">
            <span>İletişim</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
