import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const RightPanel = ({ onStart }) => {
  const [videoEnded, setVideoEnded] = useState(false);

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

      {/* Accordion */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
        }}
      >
        <div
          className="accordion"
          id="scriptAccordion"
          style={{
            width: '220px',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={{
                  width: '220px',
                  height: '40px',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  fontSize: '14px',
                }}
              >
                Script
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#scriptAccordion"
            >
              <div
                className="accordion-body"
                style={{
                  height: '425px',
                  overflow: 'auto',
                  overflowX: 'hidden',
                }}
              >
                Hi, I’m Dr. Mathilde Feldman. I work for the Women’s Health Center, where, as a clinical psychologist, I often consult with people who are feeling overwhelmed by an unexpected pregnancy. Even when women know that they want their baby, they still may have mixed feelings and encounter considerable stress themselves, and in their relationships with partners and other family. Sometimes they face difficult decisions that have no easy solution. I’d be interested in hearing what you think about a woman I’m working with now. Catarina is a 22-year-old woman who recently found herself unexpectedly pregnant. She and her partner both want the baby, but she has some serious concerns about how to provide her baby with the best possible prenatal environment. For example, what are the potential effects of alcohol use, including just social drinking, early in pregnancy, before a woman even knows she is pregnant? What about exposure to smoke from cigarettes or vapors from e-cigs? How important is diet? What about prescription medications that are critical to the mother’s health but might be harmful to the developing baby? These are the questions you will answer as you Make a Decision. To answer the questions, you will Investigate the Evidence I have collected from the life of Catarina. But before you Investigate the Evidence, take some time to Consult the Research I’ve collated for you.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Container */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: '472px',
          height: '271px',
          borderRadius: '4px',
          border: '0.75px solid #ccc',
          paddingTop: '35px',
          paddingRight: '136px',
          paddingBottom: '35px',
          paddingLeft: '136px',
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
          <source src="/videos/ch0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Info Text */}
      <p style={{ maxWidth: '472px', color: '#444' }}>
        To answer the questions, you will <strong>Investigate the Evidence</strong> I have collected from the life of Catarina.
        But before you <strong>Investigate the Evidence</strong>, take some time to <strong>Consult the Research</strong> I’ve collated for you.
      </p>

      {/* Start Button */}
      <Button
        variant="primary"
        disabled={!videoEnded}
        onClick={onStart}
        style={{
          width: '106px',
          height: '40px',
          borderRadius: '4px',
          padding: '8px 16px 8px 24px',
          fontFamily: 'Work Sans',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          textTransform: 'uppercase',
        }}
      >
        Start
      </Button>
    </div>
  );
};

export default RightPanel;