import React from 'react';
import './BottomPanel.css';

const buttons = [
  { id: 1, label: 'Introduction', sub: '', state: 'default' },
  { id: 2, label: 'Artifacts I', sub: 'Consult the Research', state: 'default' },
  { id: 3, label: 'Artifacts II', sub: 'Investigate the Evidence', state: 'default' },
  { id: 4, label: 'Last', sub: 'Make a Decision', state: 'default' },
];

/* { id: 3, label: 'Chapter 2', state: 'viewed' },
  { id: 4, label: 'Summary', state: 'hover' },
  { id: 3, label: 'Chapter 2', state: 'active' },
  { id: 4, label: 'Summary', state: 'hover' }, */

const BottomPanel = () => {
  return (
    <div className="bottom-panel d-flex py-2" style={{width: '1024px'}}>
      {buttons.map((btn, indx) => (
        <div key={btn.id} className={`bottom-button ${btn.state}-${indx}`}>
          <div className="icon-container">
            <div className="status-indicator" />
          </div>
          <div className="text-container">
            <div className="label">{btn.label}</div>
            <div className="sub">{btn.sub}</div>
            {btn.state === 'viewed' && (
              <div className="viewed-tag">Viewed</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomPanel;