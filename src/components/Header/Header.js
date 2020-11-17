import React, {useState} from 'react';
import './Header.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../images/testImage.JPG';
import image2 from '../../images/testImage.JPG';
import image3 from '../../images/testImage.JPG';
import Hamberger from '../../SVGs/Hamberger';
import Close from '../../SVGs/Close';

const topImage = "https://firebasestorage.googleapis.com/v0/b/motsunabe-2020.appspot.com/o/nabe1.png?alt=media&token=aa9ba3bd-88d4-42fe-b687-7becfa5bd157";

export default function Header(props) {
  const [smartphoneMenuOpen, setSmartphoneMenuOpen] = useState(false);
  console.log(smartphoneMenuOpen);
  

  const SmartphoneMenu = () => {
    console.log('hiiiiiiiiiiii');
    
    return (
      <div className="smartphone-menu-wrapper">
        <div className="smartphone-menu-bar">
          <h1 className="header-title">あかおに</h1>
          <div className="close-button" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>{<Close />}</div>
        </div>
        <div className="mobile-menu-items-wrapper">
          <ul>
            <li><a className="mobile-menu-link" href="/">HOME</a></li>
            <li onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}><a className="mobile-menu-link" href="#online-store">ONLINE STORE</a></li>
            <li onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}><a className="mobile-menu-link" href="#about">ABOUT</a></li>
          </ul>
        </div>
      </div>
    )
  }

   
  return (
    <div className="header">
      <div className="menu-bar">
        <h2 className="header-title">あかおに</h2>
        <div className="menu-items">
          <div className="menu-item">TOP</div>
          <div className="menu-item">ONLINE STORE</div>
          <div className="menu-item">ABOUT</div>
        </div>
        <div className="hamberger-menu" onClick={() => setSmartphoneMenuOpen(!smartphoneMenuOpen)}>
          <Hamberger className="hamberger" />
        </div>
      </div>
      {smartphoneMenuOpen ? <SmartphoneMenu /> : null}
      <div className="slider-wrapper">
        <AliceCarousel
          duration={400}
          autoPlay={true}
          buttonsDisabled={true}
          mouseDragEnabled={true}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
        >
          <img className="slider-img" src={topImage} alt="akaoni menu"/>
          <img className="slider-img" src={topImage} alt="akaoni menu"/>
          <img className="slider-img" src={topImage} alt="akaoni menu"/>
        </AliceCarousel>
      </div>
    </div>
  )
};