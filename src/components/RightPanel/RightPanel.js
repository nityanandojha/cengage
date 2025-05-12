import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const RightPanel = ({ onStart, showVideoPage = true }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [started, setStarted] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const contentPages = [
    "Page 1: What are the effects of alcohol early in pregnancy?",
    "Page 2: How does smoking or vaping impact fetal development?",
    "Page 3: Why is maternal diet important for prenatal health?",
    "Page 4: How to manage medications that might affect the baby?"
  ];

  const handleStartClick = () => {
    setStarted(true);
    setPageIndex(0);
    onStart();
  };

  const handleNext = () => {
    if (showVideoPage && !started) {
      setStarted(true);
      setPageIndex(0);
    } else if (pageIndex < contentPages.length - 1) {
      setPageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (showVideoPage && pageIndex === 0) {
      setStarted(false); // Go back to video
    } else if (pageIndex > 0) {
      setPageIndex(prev => prev - 1);
    }
  };

  return (
    <div
      className="bg-white border position-relative"
      style={{
        width: '740px',
        height: '521px',
        padding: '16px',
        borderRadius: '4px',
        border: '1px solid #D4D4D4',
        marginLeft: '16px',
        fontFamily: 'Work Sans, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <h5 style={{ fontWeight: 500, color: '#22242C' }}>Instructions</h5>

      {/* Accordion remains unchanged */}
      <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
        <div className="accordion" id="scriptAccordion" style={{ width: '220px', borderRadius: '4px', overflow: 'hidden' }}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne"
                style={{ width: '220px', height: '40px', borderRadius: '4px', padding: '8px 16px', fontSize: '14px' }}>
                Script
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#scriptAccordion">
              <div className="accordion-body" style={{ height: '425px', overflow: 'auto', overflowX: 'hidden' }}>
                Hi, I’m Dr. Mathilde Feldman. ... (script content)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      {!started && showVideoPage && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: '472px',
            height: '271px',
            borderRadius: '4px',
            border: '0.75px solid #ccc',
            padding: '35px 136px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <video
            width="472"
            height="271"
            controls
            style={{ borderRadius: '4px' }}
            onEnded={() => setVideoEnded(true)}
          >
            <source src="/videos/psych_post_divorce_adjustment.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Content Section */}
      {started && (
        <div
          style={{
            width: '472px',
            minHeight: '200px',
            padding: '16px',
            backgroundColor: '#f3f3f3',
            borderRadius: '4px',
            color: '#333',
          }}
        >
          {contentPages[pageIndex]}
        </div>
      )}

      {/* Info Text (before start) */}
      {!started && (
        <p style={{ maxWidth: '472px', color: '#444' }}>
          To answer the questions, you will <strong>Investigate the Evidence</strong> I have collected from the life of Catarina.
          But before you <strong>Investigate the Evidence</strong>, take some time to <strong>Consult the Research</strong> I’ve collated for you.
        </p>
      )}

      {/* Buttons */}
      <div className="d-flex justify-content-between" style={{ width: '100%' }}>
        {/* Start button on left */}
        {!started && showVideoPage && (
          <Button
            variant="primary"
            disabled={!videoEnded}
            onClick={handleStartClick}
            style={{
              width: '106px',
              height: '40px',
              borderRadius: '4px',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'uppercase',
            }}
          >
            Start
          </Button>
        )}

        {/* Empty placeholder if no Start button so spacing is maintained */}
        {!started && !showVideoPage && <div style={{ width: '106px' }}></div>}

        {/* Next/Prev on right */}
        {started && (
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handlePrev} disabled={!showVideoPage && pageIndex === 0}>
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNext} disabled={pageIndex === contentPages.length - 1}>
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPanel;  