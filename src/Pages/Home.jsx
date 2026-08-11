import React from 'react';
import Sponsors from '../components/Sponsors';
import { Trophy } from 'lucide-react';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpeg';
import logo3 from '../assets/logo3.png';
import lines from '../assets/lines.png';



function Home({ t, goToProducts }) {

 const trophiesList = [
   { id: 1, name: t?.league || "الدوري المصري الممتاز", count: 14, icon: <Trophy className="trophy-icon" /> },
    { id: 2, name: t?.egyptCup || "كأس مصر", count: 28, icon: <Trophy className="trophy-icon" /> },
    { id: 3, name: t?.cafChampions || "دوري أبطال إفريقيا", count: 5, icon: <Trophy className="trophy-icon" /> },
    { id: 4, name: t?.cafSuperCup || "كأس السوبر الإفريقي", count: 5, icon: <Trophy className="trophy-icon" /> },
    { id: 5, name: t?.confederationCup || "كأس الكونفدرالية", count: 2, icon: <Trophy className="trophy-icon" /> },
    { id: 6, name: t?.egyptSuperCup || "كأس السوبر المصري", count: 4, icon: <Trophy className="trophy-icon" /> },
    { id: 7, name: t?.africanCupWinners || "كأس الكؤوس الافريقية", count: 1, icon: <Trophy className="trophy-icon" /> },
    { id: 8, name: t?.cafCup || "كأس الاتحاد الإفريقي (دوري القارة)", count: 1, icon: <Trophy className="trophy-icon" /> },
    { id: 9, name: t?.afroAsianCup || "الكأس الأفروآسيوية للأندية", count: 2, icon: <Trophy className="trophy-icon" /> },
    { id: 10, name: t?.arabClubChampions || "كأس أبطال العرب", count: 1, icon: <Trophy className="trophy-icon" /> },
    { id: 11, name: t?.egyptSaudiSuperCup || "كأس السوبر المصري السعودي", count: 2, icon: <Trophy className="trophy-icon" /> },
    { id: 12, name: t?.sultanHusseinCup || "كأس السلطان حسين", count: 2, icon: <Trophy className="trophy-icon" /> },
  ];

  return (
    <div className="home-page">
      {/* البانر الرئيسي */}
      <section className="hero-banner" 
      style={{
         textAlign: 'center',
        padding: '60px 20px',
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(${logo1})`,
        // backgroundRepeat:'no-repeat',
        // backgroundPosition:'center',
        // backdropfilter: 'blur(10px)',
        backgroundColor: '#c9bcbc',
         color: '#111111',
          marginBottom: '-30px' 
          }}>

        <h1 style={{ fontSize: '32px', color: '#e60000', marginBottom: '60px',marginTop:'85px' }}>
          {t?.clubName || "نادي الزمالك للألعاب الرياضية"}
        </h1>
        <h1> since 1911</h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>المتجر الرسمي للقلعة البيضاء</p>
        <button 
          onClick={goToProducts} 
          className="herobtn"
         
        >
          تسوق أحدث المنتجات
        </button>
      </section>

      <div className="trophy">
         <h2></h2>
         
      </div>


    <section className="trophies-section">
      <div className="trophies-container">
        <h2 className="trophies-title">{t?.tournamentsTitle ||"سجل البطولات "}</h2>
        <div className="trophies-grid">
          {trophiesList.map((item) => (
            <div key={item.id} className="trophy-card">
              <div className="trophy-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="trophy-count">{item.count}</h3>
              <p className="trophy-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  


      {/* قسم الرعاة داخل الهوم */}
      <Sponsors t={t} />
    </div>
  );
}

export default Home;