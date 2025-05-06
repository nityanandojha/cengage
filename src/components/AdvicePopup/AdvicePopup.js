import React from 'react';
import './AdvicePopup.css';

const AdvicePopup = ({ onClose }) => {
  return (
    <div className="advice-popup">
      <button className="advice-popup-close" onClick={onClose}>✕</button>

      <div>
        <div className="advice-popup-title">Advice</div>
        <div className="advice-popup-content">
        Content 
        </div>
      </div>

      <div className="advice-popup-footer">
        <button className="advice-popup-ok-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default AdvicePopup;