import React from 'react';
import './About.css';

const aboutImage = "https://firebasestorage.googleapis.com/v0/b/motsunabe-2020.appspot.com/o/home_picture.png?alt=media&token=d33967c7-794c-4212-9858-657c15db20c5";

export default function About(props) {
  return (
    <div className="about" id="about">
      <h2 className="about-title">赤鬼について</h2>
      <div className="about-block">
        <div className="about-wrapper">
          <div className="about-messages-wrapper">
            <h2>安らげる家族との空間を。</h2>
            <div>赤鬼は堺市で、長年お客様に愛されてきました。Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero inventore dolores vel neque soluta dicta officia quidem cupiditate, excepturi vitae molestiae! Labore hic repellat blanditiis minus maiores quod quaerat!</div>
          </div>
          <img className="about-image" src={aboutImage} alt="about-image" />
        </div>
      </div>
    </div>
  )
};