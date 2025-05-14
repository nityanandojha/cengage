// src/components/LeftPanel/LeftPanel.jsx
import React, { useState } from 'react';
import { LEFT_CONFIG } from '../../data/LEFT_CONFIG';

const LeftPanel = ({
  tab,
  pageIndex,
  onPageSelect
}) => {
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [showNewNotePopup, setShowNewNotePopup] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');
  const [noteTab, setNoteTab] = useState('Take Notes');
  const [selectedHighlightColor, setSelectedHighlightColor] = useState('None');

  // pull in the arrays for this tab (or fallback to main)
  const { primary } = LEFT_CONFIG[tab] || LEFT_CONFIG.main;

  return (
    <div style={{
      backgroundColor: '#FFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '16px',
      boxSizing: 'border-box',
      fontFamily: 'Work Sans, sans-serif',
      margin: '6px',
      position: 'relative'
    }}>
      {/* Primary List */}
      <div style={{
        padding: '10px',
        border: '1px solid #dee2e6',
        borderRadius: '4px'
      }}>
        {primary.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onPageSelect(idx)}
            style={{
              cursor: 'pointer',
              padding: '8px',
              marginBottom: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: idx === pageIndex ? '#f0f0f0' : 'transparent',
              borderRadius: '4px',
              transition: 'background-color .2s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: idx === pageIndex ? '6px' : '4px',
                height: '55px',
                backgroundColor: item.color,
                borderRadius: '4px',
                transition: 'width .2s'
              }} />
              <div style={{
                fontWeight: idx === pageIndex ? 700 : 600,
                fontSize: '16px',
                color: idx === pageIndex ? item.color : '#252525'
              }}>
                {item.label}
              </div>
            </div>
            <div style={{
              width: '16px',
              height: '16px',
              border: `${idx === pageIndex ? '4px' : '2px'} solid ${idx === pageIndex ? item.color : '#767676'}`,
              borderRadius: '50%',
              // opacity: idx === pageIndex ? 1 : 0.3,
              transition: 'opacity .2s'
            }} />
          </div>
        ))}
      </div>

      {/* MY NOTES Button */}
      <button
        onClick={() => setShowNotesPopup(true)}
        style={{
          width: '146px',
          height: '40px',
          borderRadius: '4px',
          border: '1px solid #D4D4D4',
          backgroundColor: '#FFF',
          color: '#454545',
          fontWeight: 500,
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        <span className="material-icons" style={{ color: '#22242C' }}>edit_note</span>
        MY NOTES
      </button>

      {/* Notes Popup */}
      {showNotesPopup && (
        <div style={{
          position: 'absolute',
          top: '210px',
          left: '10px',
          width: '236px',
          height: '210px',
          backgroundColor: '#FFF',
          border: '1px solid #D4D4D4',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
          zIndex: 10,
          boxSizing: 'border-box',
        }}>
          {/* header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
              <span className="material-icons" style={{ color: '#22242C' }}>edit_note</span>
              MY NOTES
            </div>
            <span
              className="material-icons"
              style={{ cursor: 'pointer', color: '#777' }}
              onClick={() => setShowNotesPopup(false)}
            >close</span>
          </div>
          {/* tabs All/Notes/Highlights */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '32px',
            paddingBottom: '4px',
          }}>
            {['All', 'Notes', 'Highlights'].map(t => (
              <div
                key={t}
                onClick={() => setSelectedTab(t)}
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '4px',
                  color: selectedTab === t ? '#007BFF' : '#555',
                }}
              >
                {t}
                {selectedTab === t && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#007BFF',
                    borderRadius: '1px',
                  }} />
                )}
              </div>
            ))}
          </div>
          <div style={{
            marginTop: '20px',
            width: '100%',
            borderBottom: '1px solid #E0E0E0',
          }} />
          <button
            onClick={() => setShowNewNotePopup(true)}
            style={{
              marginTop: '30px',
              width: '100%',
              height: '40px',
              border: '1px solid #D4D4D4',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              fontSize: '14px',
              fontWeight: 500,
              color: '#454545',
            }}
          >
            + Create New Note
          </button>
        </div>
      )}

      {/* New Note Popup */}
      {showNewNotePopup && (
        <div style={{
          position: 'absolute',
          top: '210px',
          left: '250px',
          width: '292px',
          backgroundColor: '#FFF',
          border: '1px solid #D4D4D4',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
          zIndex: 11,
          boxSizing: 'border-box',
        }}>
          <span
            className="material-icons"
            onClick={() => setShowNewNotePopup(false)}
            style={{
              position: 'absolute',
              top: '3px',
              right: '3px',
              fontSize: '14px',
              color: '#777',
              cursor: 'pointer',
            }}
          >close</span>
          <div style={{
            width: '100%',
            height: '68px',
            border: '1px solid #D4D4D4',
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            {['Highlight', 'Take Notes'].map(t => (
              <div
                key={t}
                onClick={() => setNoteTab(t)}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: noteTab === t ? '#007BFF' : '#252525',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
              >
                {t}
                {noteTab === t && (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#007BFF',
                    borderRadius: '1px',
                  }} />
                )}
              </div>
            ))}
          </div>
          {noteTab === 'Take Notes' ? (
            <div style={{
              height: '276px',
              border: '1px solid #D4D4D4',
              borderRadius: '8px',
              padding: '12px',
              marginTop: '12px',
              boxSizing: 'border-box',
            }}>
              <textarea
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  resize: 'none',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  outline: 'none',
                }}
                placeholder="Write your note here..."
              />
            </div>
          ) : (
            <div style={{
              width: '292px',
              height: '52px',
              border: '1px solid #D4D4D4',
              borderRadius: '8px',
              padding: '12px',
              marginTop: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              {['NONE', '#BD6697', '#67BC46', '#F89B1B', '#009FDA'].map(color => (
                <div
                  key={color}
                  onClick={() => setSelectedHighlightColor(color)}
                  style={{
                    width: '27px',
                    height: '27px',
                    borderRadius: '4px',
                    border: selectedHighlightColor === color ? '2px solid #007BFF' : '1px solid #D4D4D4',
                    backgroundColor: color === 'NONE' ? 'transparent' : color,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#555',
                  }}
                  title={color}
                >
                  {color === 'NONE' && 'NONE'}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
