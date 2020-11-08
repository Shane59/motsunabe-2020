import React from 'react';
import './Footer.css';


export default function Footer(props) {
  return (
    <div className="footer">
      <div className="contents-wrapper">
        <h2>Akaoni</h2>
        <div className="info-wrapper">
          <div className="info">
            大阪市
          </div>
          <div className="info">
            <ul className="list">
              <li>ONLINE STORE</li>
              <li>Instagram</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="info">
            <ul className="list">
              <li>HOME</li>
              <li>ONLINE STORE</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};