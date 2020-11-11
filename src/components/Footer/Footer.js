import React from 'react';
import './Footer.css';


export default function Footer(props) {
  return (
    <div className="footer">
      <div className="contents-wrapper">
        <h2 className="footer-title">あかおに</h2>
        <div className="info-wrapper">
          <div className="address">
            大阪市界市中区平井195-1<br/>
            <a className="number" href="TEL: 0722223333">TEL. 072-222-333</a><br/>
            <a className="google-map" href="https://google.com">Google Map</a>
          </div>
          <div className="links-wrapper">
            <div className="info">
              <ul className="list">
                <li><a className="footer-link" href="">Instagram</a></li>
                <li><a className="footer-link" href="">Blog</a></li>
              </ul>
            </div>
            <div className="info2">
              <ul className="list">
                <li><a className="footer-link" href="/">HOME</a></li>
                <li><a className="footer-link" href="#online-store">ONLINE STORE</a></li>
                <li><a className="footer-link" href="#about">ABOUT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};