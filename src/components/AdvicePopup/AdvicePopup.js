import React from 'react';
import './AdvicePopup.css';

const AdvicePopup = ({ onClose, color }) => {
  return (
    <div className="advice-popup">
      <button className="advice-popup-close" style={{ color: color }} onClick={onClose}>✕</button>

      <div>
        <div className="advice-popup-title">Advice</div>
        <div className="advice-popup-content">
        These are the factors you will consider when you Investigate the Evidence about the areas that are important for parents to address post divorce. 
        </div>
      </div>

      <div className="advice-popup-footer">
        <button className="advice-popup-ok-btn" style={{ backgroundColor: color, borderColor: color }} onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default AdvicePopup;