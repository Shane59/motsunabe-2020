import React, {useEffect} from 'react';
import './InstagramSection.css';

export default function InstagramSection(props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <div className="instagram-section-wrapper" id="instagram-wrapper">
      <div className="instagram-section-title-wrapper">
        <h2 className="instagram-section-title">#akaoni</h2>
        <a className="instagram-section-button" href="https://akaoni.official.ec/">
          Follow us @akaoni
        </a>
      </div>
      <div className="instagram-section">
        <div class="elfsight-app-1667d984-3674-4274-b28b-dac487da2d2d"></div>
      </div>
    </div>
  )
};