import React, { useState, useEffect } from 'react';
import { RIGHT_CONFIG } from '../../data/RIGHT_CONFIG';
import { LEFT_CONFIG } from '../../data/LEFT_CONFIG';
import { Button } from 'react-bootstrap';
import ChartCard from '../ChartCard';

const RightPanel = ({
  tab,
  onFinishTab,
  onPrevTab,
  pageIndex,
  onPageChange,
}) => {
  const config = RIGHT_CONFIG[tab] || RIGHT_CONFIG.main;
  const {
    contentTitle,
    script,
    questionAnswer,
  } = config;

  const [videoEnded, setVideoEnded] = useState(false);

  // Reset videoEnded when switching tabs
  useEffect(() => {
    setVideoEnded(false);
  }, [tab]);

  // Navigation handlers
  const handleNext = () => {
    if (pageIndex < contentTitle.length - 1) {
      onPageChange(pageIndex + 1);
    } else {
      onFinishTab();
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      onPageChange(pageIndex - 1);
    } else if (onPrevTab) {
      onPrevTab();
    }
  };

  const primary = (LEFT_CONFIG[tab] || LEFT_CONFIG.main).primary;
  const current = primary[pageIndex] || primary[0];

  const qa = questionAnswer[pageIndex] || {};

  const isMainTab = tab === 'main';
  const isLastPageOfTab4 = tab === 'tab4' && pageIndex === questionAnswer.length - 1;

  return (
    <div
      className="bg-white border position-relative"
      style={{
        height: '521px',
        padding: '16px',
        borderRadius: '4px',
        border: '1px solid #D4D4D4',
        marginLeft: '16px',
        fontFamily: 'Work Sans, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        top: '6px',
        gap: '3px',
      }}
    >
      {/* Dynamic Header */}
      <h5 style={{ fontWeight: 600, color: '#000', width: '95%' }}>
        {current.label}
      </h5>

      {/* Content Title */}
      {contentTitle[pageIndex] && (
        <p style={{ color: '#22242C', fontSize: '15px', width: '95%' }}>
          {contentTitle[pageIndex]}
        </p>
      )}

      {/* Script Accordion */}
      {script && qa.showScript && (
        <div style={{ position: 'absolute', top: 10, right: 20 }}>
          <div
            className="accordion"
            id="scriptAccordion"
            style={{ width: 255, borderRadius: 4, overflow: 'hidden' }}
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
                  style={{ width: '100%', height: 40, borderRadius: 4, fontSize: 14 }}
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
                  style={{ height: 'auto', overflowY: 'auto' }}
                >
                  {script}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content (Video, FAQs, Charts, Images, etc.) */}
      <div style={{ width: '72%', marginTop: script ? 10 : 0, overflowY: 'auto' }}>
        {(() => {
          // Video
          if (qa.type === 'video') {
            return (
              <div>
                <div
                  key={pageIndex}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '100%',
                    height: 270,
                    borderRadius: 4,
                    border: '0.75px solid #ccc',
                    backgroundColor: '#f9f9f9',
                    padding: '16px',
                  }}
                >
                  <video
                    width="100%"
                    height="100%"
                    controls
                    style={{ borderRadius: 4, objectFit: 'cover' }}
                    onEnded={() => setVideoEnded(true)}
                  >
                    <source src={qa.content.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p style={{ maxWidth: '100%', color: '#444', fontSize: 15, padding: '16px 0' }}>
                  To answer the questions, you will <strong>Investigate the Evidence</strong> I have collected
                  from the life of Catarina. But before you <strong>Investigate the Evidence</strong>, take some
                  time to <strong>Consult the Research</strong> I’ve collated for you.
                </p>
              </div>
            );
          }

          // FAQs
          if (qa.faqs) {
            return qa.faqs.map((faq, i) => (
              <div
                key={i}
                className="accordion"
                style={{ width: '100%', borderRadius: 4, overflow: 'hidden', marginBottom: 10 }}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`faqHeading-${i}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faqCollapse-${i}`}
                      aria-expanded="false"
                      aria-controls={`faqCollapse-${i}`}
                      style={{ width: '100%', height: 56, borderRadius: 4, fontSize: 16, fontWeight: 600 }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faqCollapse-${i}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`faqHeading-${i}`}
                    data-bs-parent=""
                  >
                    <div className="accordion-body" style={{ height: 'auto', overflowY: 'auto' }}>
                      <div style={{ color: '#22242C', fontSize: '15px', lineHeight: '20px' }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ));
          }

          // Unordered options
          if (qa.unorderOption) {
            return (
              <ul style={{ marginBottom: 20 }}>
                {qa.unorderOption.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 10 }}>{item.opt}</li>
                ))}
              </ul>
            );
          }

          // Notes + Export button
          if (qa.notes) {
            return (
              <div style={{ marginBottom: 20 }}>
                {qa.notes.map((item, idx) => (
                  <p key={idx} style={{ fontSize: 16, fontWeight: 400, color: '#22242C' }}>{item.opt}</p>
                ))}
                <Button
                  style={{ height: 40, borderRadius: 4, fontWeight: 500, fontSize: 15, textTransform: 'uppercase', backgroundColor: '#009FDA', borderColor: '#009FDA', marginTop: 20 }}
                >
                  Export MY Notes
                </Button>
              </div>
            );
          }

          // Screenshots
          const widthMap = { doctorNote: '65%', textMessage: '50%', image: '50%' };
          if (widthMap[qa.type]) {
            const altMap = { doctorNote: 'Email screenshot', textMessage: 'Text message screenshot', image: 'Image' };
            return (
              <div key={pageIndex} style={{ marginBottom: 20 }}>
                <img
                  src={qa.content.screenshot}
                  alt={altMap[qa.type] || qa.type}
                  style={{ width: widthMap[qa.type] }}
                />
              </div>
            );
          }

          // Chart
          if (qa.type === 'chart') {
            const {
              labels, series, metric, subtext
            } = qa.content;
            return (
              <div key={pageIndex} style={{ marginBottom: 20, width: '550px' }}>
                <ChartCard
                  title={qa.title}
                  labels={labels}
                  series={series}
                  metric={metric}
                  subtext={subtext}
                  period="This Week"
                  periods={["This Week", "Last Week"]}
                  onPeriodChange={(p) => console.log('Period →', p)}
                />
              </div>
            );
          }

          return null;
        })()}
      </div>

      {
        isMainTab ?
          // start button 
          (
            <Button
              variant="primary"
              disabled={qa.type === 'video' && !videoEnded}
              onClick={() => handleNext()}
              style={{
                width: 106,
                height: 40,
                borderRadius: 4,
                fontWeight: 500,
                fontSize: 16,
                textTransform: 'uppercase',
                backgroundColor: '#BD6697',
                borderColor: '#BD6697',
                bottom: 10,
                position: 'absolute'
              }}
            >
              Start
            </Button>
          )
          :
          // Navigation 
          <div className="d-flex" style={{ position: 'absolute', bottom: 15, gap: 10, width: '100%', justifyContent: 'flex-end', right: 15 }}>
            <Button variant="secondary" onClick={handlePrev} style={{ width: 115, height: 40, borderRadius: 4, fontWeight: 500, fontSize: 16, textTransform: 'uppercase', backgroundColor: 'transparent', borderColor: '#BDBDBD', color: '#000' }}>
              ← Back
            </Button>
            {
              !isLastPageOfTab4 && (
                <Button
                  variant="secondary"
                  onClick={handleNext}
                  disabled={qa.type === 'video' && !videoEnded}
                  // disabled={(qa.type === 'video' && !videoEnded) || pageIndex === contentTitle.length - 1}
                  style={{ width: 115, height: 40, borderRadius: 4, fontWeight: 500, fontSize: 16, textTransform: 'uppercase', backgroundColor: 'transparent', borderColor: '#BDBDBD', color: '#000' }}
                >
                  Next →
                </Button>
              )
            }
          </div>
      }
    </div >
  );
};
export default RightPanel;