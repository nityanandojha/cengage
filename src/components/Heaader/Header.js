import React, { useState } from 'react';
import AdvicePopup from '../AdvicePopup/AdvicePopup';

const Header = ({ title, color, bgColor }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', borderBottom: '1px solid #D4D4D4' }}>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          width: '100%',
          height: '72px',
          fontFamily: 'Work Sans',
        }}
      >
        <h2
          style={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#22242C',
            marginLeft: '22px',
          }}
        >
          {title}
        </h2>

        <button
          className="d-flex align-items-center"
          style={{
            width: '123px',
            height: '40px',
            borderRadius: '4px',
            border: `1px solid ${color}`,
            backgroundColor: bgColor,
            color,
            fontWeight: 500,
            gap: '8px',
            marginRight: '10px',
          }}
          onClick={() => setShowPopup(v => !v)}
        >
          <span
            style={{
              border: `2px solid ${color}`,
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              lineHeight: 0,
            }}
          >
            ?
          </span>
          ADVICE
        </button>
      </div>

      {showPopup && <AdvicePopup onClose={() => setShowPopup(false)} color={color}/>}
    </div>
  );
};

export default Header;
