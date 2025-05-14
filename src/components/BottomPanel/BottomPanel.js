// import React from 'react';
// import './BottomPanel.css';

// /* const buttons = [
//   { id: 1, label: 'Introduction', sub: '', state: 'default' },
//   { id: 2, label: 'Artifacts I', sub: 'Consult the Research', state: 'default' },
//   { id: 3, label: 'Artifacts II', sub: 'Investigate the Evidence', state: 'default' },
//   { id: 4, label: 'Last', sub: 'Make a Decision', state: 'default' },
// ]; */

// const buttons = [
//   { id: 1, label: 'Viewed', sub: 'Introduction', borderColor: '#BD6697', className: 'btn-intro', state: 'viewed' },
//   { id: 2, label: 'Artifacts I', sub: 'Consult the Research', borderColor: '#67BC46', className: 'btn-artifacts1', state: 'default' },
//   { id: 3, label: 'Artifacts II', sub: 'Investigate the Evidence', borderColor: '#F89B1B', className: 'btn-artifacts2', state: 'default' },
//   { id: 4, label: 'Last', sub: 'Make a Decision', borderColor: '#009FDA', className: 'btn-last', state: 'default' },
// ];

// const BottomPanel = () => {
//   return (
//     <div className="bottom-panel d-flex py-2" style={{ width: '1024px' }}>
//       {buttons.map((btn, indx) => (
//         <div key={`${btn.id}-${indx}`} className={`bottom-button ${btn.className}`}>
//           <div className="icon-container">
            
//             <div className="status-indicator checked"></div>
//             <div className={`status-indicator ${btn.state}`}>
//               {btn.state === 'viewed' && <span className="tick">✓</span>}
//             </div>

//           </div>
//           <div className="text-container">
//             {/* <div className="label">{btn.label}</div> */}
//             {btn.state === 'viewed' && <div className="viewed-tag">Viewed</div>}
//             <div className="sub">{btn.sub}</div>
            
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BottomPanel;


import React from 'react';
import './BottomPanel.css';

const buttons = [
  { id: 1, label: 'Viewed', sub: 'Introduction', borderColor: '#BD6697', className: 'btn-intro', state: 'viewed', tab: 'main' },
  { id: 2, label: 'Artifacts I', sub: 'Consult the Research', borderColor: '#67BC46', className: 'btn-artifacts1', state: 'default', tab: 'tab2' },
  { id: 3, label: 'Artifacts II', sub: 'Investigate the Evidence', borderColor: '#F89B1B', className: 'btn-artifacts2', state: 'default', tab: 'tab3' },
  { id: 4, label: 'Last', sub: 'Make a Decision', borderColor: '#009FDA', className: 'btn-last', state: 'default', tab: 'tab4' },
];

const BottomPanel = ({ setActiveTab }) => {
  return (
    <div className="bottom-panel d-flex py-2" style={{ width: '100%' }}>
      {buttons.map((btn, indx) => (
        <div
          key={`${btn.id}-${indx}`}
          className={`bottom-button ${btn.className}`}
          // onClick={() => setActiveTab(btn.tab)}
        >
          <div className="icon-container">
            <div className="status-indicator checked"></div>
            <div className={`status-indicator ${btn.state}`}>
              {btn.state === 'viewed' && <span className="tick">✓</span>}
            </div>
          </div>
          <div className="text-container">
            {btn.state === 'viewed' && <div className="viewed-tag">Viewed</div>}
            <div className="sub">{btn.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomPanel;
