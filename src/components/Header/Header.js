import React from 'react';
import './Header.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../images/testImage.JPG';
import image2 from '../../images/testImage.JPG';
import image3 from '../../images/testImage.JPG';
import Hamberger from '../../SVGs/Hamberger';

const topImage = "https://firebasestorage.googleapis.com/v0/b/motsunabe-2020.appspot.com/o/nabe1.png?alt=media&token=aa9ba3bd-88d4-42fe-b687-7becfa5bd157";

export default function Header(props) {
  return (
    <div className="header">
      <div className="menu-bar">
        <h2 className="header-title">Akaoni</h2>
        <div className="menu-items">
          <div className="menu-item">TOP</div>
          <div className="menu-item">ONLINE STORE</div>
          <div className="menu-item">ABOUT</div>
        </div>
        <div className="hamberger-menu">
          <Hamberger />
        </div>
      </div>
      <div>
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