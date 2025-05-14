import React, { useState, useEffect } from 'react';
import { RIGHT_CONFIG } from '../../data/RIGHT_CONFIG';
import { LEFT_CONFIG } from '../../data/LEFT_CONFIG';
import { Button } from 'react-bootstrap';
import ChartCard from '../ChartCard';

const RightPanel = ({
  tab,
  onStart,
  onFinishTab,
  onPrevTab,
  showVideoPage,
  pageIndex,
  onPageChange,
}) => {
  const config = RIGHT_CONFIG[tab] || RIGHT_CONFIG.main
  const {
    contentTitle,
    script,
    questionAnswer,
    showVideoPage: configShowVideo = showVideoPage,
  } = config;

  const [videoEnded, setVideoEnded] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setVideoEnded(false);
    setStarted(!configShowVideo);
  }, [tab, configShowVideo]);

  useEffect(() => {
    if (
      started &&
      contentTitle.length > 0 &&
      pageIndex === contentTitle.length - 1
    ) {
      const timer = setTimeout(() => onFinishTab(), 1500);
      return () => clearTimeout(timer);
    }
  }, [started, pageIndex, contentTitle.length, onFinishTab]);

  // 5) Handlers
  const handleStartClick = () => {
    onStart();
    if (contentTitle.length === 0) {
      onFinishTab();
    } else {
      setStarted(true);
    }
  };

  const handleNext = () => {
    if (configShowVideo && !started) {
      handleStartClick();
    } else if (pageIndex < contentTitle.length - 1) {
      onPageChange(pageIndex + 1);
    } else {
      onFinishTab();
    }
  };

  const handlePrev = () => {
    if (configShowVideo && pageIndex === 0) {
      setStarted(false);
    } else if (pageIndex > 0) {
      onPageChange(pageIndex - 1);
    } else if (onPrevTab) {
      onPrevTab();
    }
  };

  const primary = (LEFT_CONFIG[tab] || LEFT_CONFIG.main).primary;
  const current = primary[pageIndex] || primary[0];

  const questionAnswerSection = RIGHT_CONFIG[tab]?.questionAnswer ?? [];

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
        gap: '3px'
      }}
    >
      {/* Dynamic Header */}
      <h5 style={{ fontWeight: 600, color: '#000', width: '95%' }}>
        {current.label}
      </h5>

      {
        started && contentTitle && contentTitle[pageIndex] && (
          <p style={{ color: '#22242C', fontSize: '15px', width: '95%' }}>
            {contentTitle[pageIndex]}
          </p>
        )
      }

      {/* Optional Script Accordion */}
      {!started && configShowVideo && script && (
        <div style={{ position: 'absolute', top: 10, right: 20 }}>
          <div
            className="accordion"
            id="scriptAccordion"
            style={{ width: 250, borderRadius: 4, overflow: 'hidden' }}
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
                <div className="accordion-body" style={{ height: 'auto', overflowY: 'auto' }}>
                  {script}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video (pre-start on video tabs) */}
      {!started && configShowVideo && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: '70%',
            height: 260,
            borderRadius: 4,
            border: '0.75px solid #ccc',
            backgroundColor: '#f9f9f9',
            padding: '35px 136px'
          }}
        >
          <video
            width={472}
            height={260}
            controls
            style={{ borderRadius: 4 }}
            onEnded={() => setVideoEnded(true)}
          >
            <source
              src="/videos/psych_post_divorce_adjustment.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Questions and Answers Accordion */}
      {started && questionAnswerSection.length > pageIndex && (
        <div style={{ width: '95%' }}>
          {(() => {
            const qa = questionAnswerSection[pageIndex];
            const accId = `qaAccordion-${pageIndex}`;
            const headingId = `heading-${pageIndex}`;
            const collapseId = `collapse-${pageIndex}`;

            if (qa?.faqs) {
              return qa.faqs.map((faq, subIdx) => (
                <div
                  key={`${pageIndex}-${subIdx}`}
                  className="accordion"
                  id={accId}
                  style={{ width: '100%', borderRadius: 4, overflow: 'hidden', marginBottom: 10 }}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id={`${headingId}-${subIdx}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}-${subIdx}`}
                        aria-expanded="false"
                        aria-controls={`${collapseId}-${subIdx}`}
                        style={{ width: '100%', height: 56, borderRadius: 4, fontSize: 16, fontWeight: 600 }}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`${collapseId}-${subIdx}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`${headingId}-${subIdx}`}
                      data-bs-parent={`#${accId}`}
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

            if (qa?.unorderOption) {
              return (
                <div key={pageIndex} className="accordion-body" style={{ marginBottom: 20 }}>
                  <ul>
                    {qa.unorderOption.map((item, i) => (
                      <li key={i} style={{ marginBottom: 10 }}>{item.opt}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            if (qa?.notes) {
              return (
                <div key={pageIndex} className="accordion-body" style={{ marginBottom: 20 }}>
                  {qa.notes.map((item, i) => (
                    <p key={i} style={{ fontSize: 16, fontWeight: 400, color: '#22242C' }}>
                      {item.opt}
                    </p>
                  ))}
                  <Button
                    style={{
                      height: 40,
                      borderRadius: 4,
                      fontWeight: 500,
                      fontSize: 15,
                      textTransform: 'uppercase',
                      backgroundColor: '#009FDA',
                      borderColor: '#009FDA',
                      marginTop: 20
                    }}
                  >
                    Export MY Notes
                  </Button>
                </div>
              );
            }

            const widthMap = {
              doctorNote: '60%',
              textMessage: '45%',
              image: '45%',
            };
            const altMap = {
              doctorNote: 'Email screenshot',
              textMessage: 'Text message screenshot',
              image: 'Image',
            };
            const width = widthMap[qa?.type];
            if (width) {
              return (
                <div key={pageIndex} style={{ marginBottom: 20 }}>
                  <img
                    src={qa.content.screenshot}
                    alt={altMap[qa.type] || qa.type}
                    style={{ width }}
                  />
                </div>
              );
            }

            if (qa.type === 'chart') {
              const { labels, series, metric, subtext } = qa.content;
              return (
                <div key={pageIndex} style={{ marginBottom: 20, width: '550px' }}>
                  <ChartCard
                    title={qa.title}
                    labels={labels}
                    series={series}
                    metric={metric}
                    subtext={subtext}
                    period="This Week"
                    periods={['This Week', 'Last Week']}
                    onPeriodChange={(p) => console.log('Period →', p)}
                  />
                </div>
              );
            }
            return null;
          })()}
        </div>
      )}

      {/* Pre-start instructions */}
      {!started && configShowVideo && (
        <p style={{ maxWidth: '70%', color: '#444', fontSize: 15 }}>
          To answer the questions, you will <strong>Investigate the Evidence</strong> I have collected
          from the life of Catarina. But before you <strong>Investigate the Evidence</strong>, take some
          time to <strong>Consult the Research</strong> I’ve collated for you.
        </p>
      )}

      {/* Navigation */}
      <div className="d-flex justify-content-between" style={{ width: '100%' }}>
        {/* Start button */}
        {!started && configShowVideo ? (
          <Button
            variant="primary"
            disabled={!videoEnded}
            onClick={() => { handleStartClick() }}
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
        ) : (
          <div style={{ width: 106 }} />
        )}

        {/* Prev / Next */}
        {started && (
          <div className="d-flex gap-2" style={{ position: 'absolute', bottom: 15, right: 15 }} >
            <Button variant="secondary"
              style={{
                width: 115,
                height: 40,
                borderRadius: 4,
                fontWeight: 500,
                fontSize: 16,
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                borderColor: '#BDBDBD',
                color: '#000',
                borderWidth: 1
              }}
              onClick={handlePrev}>
              ← Back
            </Button>
            <Button variant="secondary"
              style={{
                width: 115,
                height: 40,
                borderRadius: 4,
                fontWeight: 500,
                fontSize: 16,
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                borderColor: '#BDBDBD',
                color: '#000',
                borderWidth: 1
              }}
              onClick={handleNext}>
              Next →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPanel;