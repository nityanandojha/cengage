import React from 'react';

const LeftPanel = ({ showExtraButtons }) => {
  return (
    <div
      style={{
        width: '236px',
        height: '521px',
        marginLeft: '23px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Work Sans, sans-serif',
      }}
    >
      {/* Instructions Tab */}
      <div
        className="border"
        style={{
          width: '236px',
          height: '80px',
          padding: '16px',
          borderRadius: '4px',
          borderWidth: '1px',
          borderColor: '#dee2e6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '204px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '78px',
            fontWeight: 600,
            fontSize: '16px',
            color: '#252525',
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
            <div>Instructions</div>
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
      </div>

      {/* Extra Buttons */}
      {showExtraButtons && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          <button
            style={{
              width: '146px',
              height: '40px',
              gap: '8px',
              borderRadius: '6px',
              border: '1px solid #D4D4D4',
              padding: '8px 16px',
              backgroundColor: '#FFFFFF',
              color: '#454545',
              fontWeight: 500,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Critical Periods
          </button>
          <button
            style={{
              width: '146px',
              height: '40px',
              gap: '8px',
              borderRadius: '6px',
              border: '1px solid #D4D4D4',
              padding: '8px 16px',
              backgroundColor: '#FFFFFF',
              color: '#454545',
              fontWeight: 500,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Maternal Lifestyle
          </button>
        </div>
      )}

      {/* My Notes Button */}
      <button
        className="d-flex align-items-center"
        style={{
          width: '146px',
          height: '40px',
          gap: '8px',
          borderRadius: '6px',
          border: '1px solid #D4D4D4',
          padding: '8px 16px',
          backgroundColor: '#FFFFFF',
          color: '#454545',
          fontWeight: 500,
          fontSize: '16px',
          alignSelf: 'flex-start',
        }}
      >
        <span className="material-icons" style={{ color: '#22242C' }}>
          edit_note
        </span>
        MY NOTES
      </button>
    </div>
  );
};

export default LeftPanel;