import React, { useState } from 'react';

const LeftPanel = ({ showExtraButtons }) => {
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '16px',
        boxSizing: 'border-box',
        fontFamily: 'Work Sans, sans-serif',
      }}
    >
      {/* Top Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Instructions Tab */}
        <div
          style={{
            height: '80px',
            padding: '16px',
            borderRadius: '4px',
            border: '1px solid #dee2e6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className="d-flex align-items-center" style={{ gap: '10px' }}>
            <div
              style={{
                width: '4px',
                height: '40px',
                backgroundColor: '#BD6697',
              }}
            ></div>
            <div
              style={{
                fontWeight: 600,
                fontSize: '16px',
                color: '#252525',
              }}
            >
              The Instructions Tab
            </div>
          </div>
          <div
            style={{
              width: '16px',
              height: '16px',
              border: '4px solid #BD6697',
              borderRadius: '50%',
            }}
          ></div>
        </div>

        {/* Extra Buttons (Styled Like Instruction Tab) */}
        {showExtraButtons && (
          <>
            <div
              style={{
                height: '80px',
                padding: '16px',
                borderRadius: '4px',
                border: '1px solid #dee2e6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                <div
                  style={{
                    width: '4px',
                    height: '40px',
                    backgroundColor: '#67BC46',
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#252525',
                  }}
                >
                  The Critical Periods Tab
                </div>
              </div>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  border: '4px solid #67BC46',
                  borderRadius: '50%',
                }}
              ></div>
            </div>

            <div
              style={{
                height: '80px',
                padding: '16px',
                borderRadius: '4px',
                border: '1px solid #dee2e6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                <div
                  style={{
                    width: '4px',
                    height: '40px',
                    backgroundColor: '#F89B1B',
                  }}
                ></div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#252525',
                  }}
                >
                  The Maternal Lifestyle Tab
                </div>
              </div>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  border: '4px solid #F89B1B',
                  borderRadius: '50%',
                }}
              ></div>
            </div>
          </>
        )}
      </div>

      {/* MY NOTES Button at Bottom */}

      <button
      onClick={() => setShowNotesPopup(true)}
        style={{
          width: '146px',
          height: '40px',
          borderRadius: '4px',
          border: '1px solid #D4D4D4',
          padding: '8px 16px',
          backgroundColor: '#FFFFFF',
          color: '#454545',
          fontWeight: 500,
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          marginLeft: '10px',
        }}
      >
        <span className="material-icons" style={{ color: '#22242C' }}>
          edit_note
        </span>
        MY NOTES
      </button>


      {showNotesPopup && (
        <div
          style={{
            position: 'absolute',
            bottom: '137px',
            left: '4px',
            width: '236px',
            height: '210px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #D4D4D4',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            zIndex: 10,
            boxSizing: 'border-box',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="d-flex align-items-center" style={{ gap: '8px', fontWeight: 600 }}>
              <span className="material-icons" style={{ color: '#22242C' }}>
                edit_note
              </span>
              MY NOTES
            </div>
            <span
              className="material-icons"
              style={{ cursor: 'pointer', color: '#777' }}
              onClick={() => setShowNotesPopup(false)}
            >
              close
            </span>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '32px',
              paddingBottom: '4px',
            }}
          >
            {['All', 'Notes', 'Highlights'].map((tab) => (
              <div
                key={tab}
                onClick={() => setSelectedTab(tab)}
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  position: 'relative',
                  paddingBottom: '4px',
                  color: selectedTab === tab ? '#007BFF' : '#555',
                }}
              >
                {tab}
                {selectedTab === tab && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#007BFF',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "20px",
              width: '100%',
              borderBottom: '1px solid #E0E0E0',
            }}></div>

          {/* Create New Note */}
          <button
            style={{
              marginTop: '30px',
              width: '100%',
              height: '40px',
              border: '1px solid #D4D4D4',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 500,
              color: '#454545',
            }}
          >
            + Create New Note
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;