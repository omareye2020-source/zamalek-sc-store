import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaGlobe } from 'react-icons/fa6';


function Footer({t}) {

    return (
    <footer className="footer">
        <div className="footer_container">
             <h2>{t?.clubName || "نادي الزمالك للألعاب الرياضية"}</h2>
             <div className="address-social">
                 <div className="address">
                    <p>{t?.address || "العنوان: جامعة الدول العربية، المهندسين، الجيزة، مصر"}</p>
                 </div>
                 <div className="social-media">
                      <h3>{t?.social || "للمزيد تابعونا"}</h3>
                      <div className="social-icons">
                              <a href="https://www.facebook.com/ZamalekOfficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                       <FaFacebook />
                              </a>
                              <a href="https://www.instagram.com/zscofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                       <FaInstagram />
                               </a>
                               <a href="https://x.com/ZSCOfficial" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                       <FaXTwitter />
                                </a>
                                <a href="https://www.el-zamalek.net" target="_blank" rel="noopener noreferrer" aria-label="Website">
                                      <FaGlobe />
                                </a>
                      </div>
                 </div>
              </div>
              <div className="footer-rights">
                     <p>{t?.rights || `جميع الحقوق محفوظة © ${new Date().getFullYear()} نادي الزمالك`}</p>
               </div>
      </div>
    </footer>
  );
}







export default Footer;