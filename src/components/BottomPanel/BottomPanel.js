import React from 'react';
import './BottomPanel.css';
import { CgFileDocument } from 'react-icons/cg';
import { TiDocumentText } from 'react-icons/ti';
import { RiMenuSearchLine } from 'react-icons/ri'
import { MdOutlineLightbulb } from "react-icons/md";

const buttons = [
  {
    id: 1,
    label: ' ',
    sub: 'Introduction',
    borderColor: '#BD6697',
    className: 'btn-intro',
    tab: 'main',
    bgColor: "#BD66971A",
    icon: <CgFileDocument size={25} color="#454545" />
  },
  {
    id: 2,
    label: 'Artifacts I',
    sub: 'Consult the Research',
    borderColor: '#67BC46',
    className: 'btn-artifacts1',
    tab: 'tab2',
    bgColor: "#67BC461A",
    icon: <TiDocumentText size={25} color="#454545" />
  },
  {
    id: 3,
    label: 'Artifacts II',
    sub: 'Investigate the Evidence',
    borderColor: '#F89B1B',
    className: 'btn-artifacts2',
    tab: 'tab3',
    bgColor: "#F89B1B1A",
    icon: <RiMenuSearchLine size={25} color="#454545" />
  },
  {
    id: 4,
    label: 'Last',
    sub: 'Make a Decision',
    borderColor: '#009FDA',
    className: 'btn-last',
    tab: 'tab4',
    bgColor: "#009FDA1A",
    icon: <MdOutlineLightbulb size={25} color="#454545" />
  },
];


const BottomPanel = ({ activeTab, tabStates }) => {
  return (
    <div className="bottom-panel d-flex py-2" style={{ width: '100%' }}>
      {buttons.map((btn, indx) => {
        const isActive = activeTab === btn.tab;
        const currentState = tabStates[btn.tab] || 'default';

        return (
          <div
            key={`${btn.id}-${indx}`}
            className={`bottom-button ${btn.className} ${isActive ? 'active' : ''}`}
            style={{ background: btn.bgColor }}
          >
            <div className="icon-container">
              <div
                className="status-indicator"
                style={{
                  backgroundColor:
                    currentState === 'active'
                      ? 'transparent'
                      : currentState === 'viewed'
                        ? '#34C759'
                        : '#BDBDBD',
                  border: currentState === 'active' ? `4px solid ${btn.borderColor}` : 'none',
                }} >
                {currentState === 'viewed' && <span className="tick">✓</span>}
              </div>
              {btn.icon}
            </div>
            <div className="text-container">
              {
                btn.label &&
                <div className="viewed-tag">
                  {btn.label} {currentState === 'viewed' && <i style={{ color: '#000' }}>Viewed</i>}
                </div>
              }
              <div className="sub">{btn.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomPanel;