import React from 'react';

const Header = () => {
    return (
        <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: '1024px', height: '72px', borderBottom: '1px solid var(--border-color)', fontFamily: "Work Sans" }}
        >
            <div
                className="mb-0"
                style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    color: '#22242C',
                    marginLeft: '22px'
                }}
            >
                Chapter 2: Investigate Development: Real-Life Applications
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
                    marginRight: '10px'
                }}
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
    );
};

export default Header;