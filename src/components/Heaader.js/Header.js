import React, { useState } from 'react';
import AdvicePopup from '../AdvicePopup/AdvicePopup';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div style={{ position: 'relative', width: '1024px' }}>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          width: '1024px',
          height: '72px',
          borderBottom: '1px solid var(--border-color)',
          fontFamily: 'Work Sans',
        }}
      >
        <div
          className="mb-0"
          style={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#22242C',
            marginLeft: '22px',
          }}
        >
          Investigate Development: Real-Life Application Prototype Functionality Guidelines
        </div>

        <button
          className="d-flex align-items-center"
          style={{
            width: '123px',
            height: '40px',
            borderRadius: '4px',
            border: '1px solid #BD6697',
            padding: '8px 16px',
            backgroundColor: '#B9508C1A',
            color: '#BD6697',
            fontWeight: '500',
            gap: '8px',
            marginRight: '10px',
          }}
          onClick={() => setShowPopup(!showPopup)}
        >
          <span
            style={{
              border: '2px solid #BD6697',
              color: '#BD6697',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              lineHeight: '0',
            }}
          >
            ?
          </span>
          ADVICE
        </button>
      </div>

      {showPopup && <AdvicePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Header;