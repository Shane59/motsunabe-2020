import React from 'react';
import './OnlineStore.css';

export default function OnlineStore(props) {
  return (
    <div className="online-store" id="online-store">
      <h2 className="online-store-title">
        お取り寄せ
      </h2>
      <div className="online-block">
        <div className="online-img-wrapper">
          <div className="messages-wrapper">
            <div className="messages">
              <h2>
                もつ鍋もお肉も、おうちで贅沢に楽しもう。
              </h2>
              <div>
                blog、Instagramでレシピ公開中!
              </div>
            </div>
            <a className="online-store-button" href="https://akaoni.official.ec/">
              オンラインストア
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};