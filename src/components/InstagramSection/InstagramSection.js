import React from 'react';
import './InstagramSection.css';

export default function InstagramSection(props) {
  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <div className="instagram-section-wrapper" id="instagram-wrapper">
      <div className="instagram-section-title-wrapper">
        <h2 className="instagram-section-title">#akaoni</h2>
        <a className="instagram-section-button" href="https://akaoni.official.ec/">
          Follow us @akaoni
        </a>
      </div>
      <iframe title="instagram"
        src="https://snapwidget.com/embed/878874"
        className="snapwidget-widget instagram-section"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
      />
    </div>
  )
};