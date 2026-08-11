import React from "react";
import fury from '../assets/furyy-remove.png';
import nike from '../assets/nike.png';
import nile from '../assets/nile.png';
import oniro from '../assets/oniro.png';
import regina from '../assets/regina-remove.png';
import seven from '../assets/seven-remove.png';
import coca from '../assets/coca-cola.png';
import ora from '../assets/ora.png';
import travx from '../assets/travx.jpeg';
import fans from '../assets/fans.jpg';




function sponsors({t}) {
     
     const sponsorsList = [
        { logo: fury, scale: 1.5 },   
        { logo: nike, scale: 1.1 },   
        { logo: nile, scale: 1.69 },     // حجم عادي
        { logo: oniro, scale: 1.5 },
        { logo: regina, scale: 1.75 }, 
        { logo: seven, scale: 1.2 },
        { logo: coca, scale: 1 },
        { logo: ora, scale: 1.3 },
        { logo: travx, scale: 1.3 }

    ];
// id="sponsors" className="sponsors-section"
 
    return (
       <section id="sponsors" className="sponsors-container"
          style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${fans})`
      }}
       >
      <h2 className="title">{t?.sponsors || "الرعاة الرسميون"}</h2>
      <div className="sponsors-grid">
        {sponsorsList.map((item, index) => (
          <div key={index} className="sponsor-card">
            <img src={item.logo} 
            alt={`Sponsor ${index + 1}`}
            style={{ transform: `scale(${item.scale})` }}
             />
          </div>
        ))}
        
      </div>
    </section>
    );
}
export default sponsors;




