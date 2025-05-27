import React, { useState, useEffect } from 'react';
import { RIGHT_CONFIG } from '../../data/RIGHT_CONFIG';
import { LEFT_CONFIG } from '../../data/LEFT_CONFIG';
import { Button } from 'react-bootstrap';
import ChartCard from '../ChartCard';
import { hightLightColor } from '../../data/HighlightColor';

const RightPanel = ({
  tab,
  onFinishTab,
  onPrevTab,
  pageIndex,
  onPageChange,
}) => {
  const config = RIGHT_CONFIG[tab] || RIGHT_CONFIG.main;
  const { contentTitle, script, questionAnswer } = config;

  const [videoEnded, setVideoEnded] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const [showNewNotePopup, setShowNewNotePopup] = useState(false);
  const [noteTab, setNoteTab] = useState('Highlight');
  const [selectedHighlightColor, setSelectedHighlightColor] = useState('');
  const [highlights, setHighlights] = useState(() => {
    const stored = localStorage.getItem('highlights');
    return stored ? JSON.parse(stored) : {};
  });

  const [currentHighlightId, setCurrentHighlightId] = useState(null);

  useEffect(() => {
    setVideoEnded(false);
  }, [tab]);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text) {
        const id = selection.anchorNode?.parentElement?.getAttribute('data-id');
        if (id) {
          setHighlightedText(text);
          setCurrentHighlightId(id);
          setShowNewNotePopup(true);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);


  const applyHighlight = (text, id) => {
    const highlightObj = highlights[id];
    if (!highlightObj || !highlightObj.text || !text) return text;

    const escaped = highlightObj.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(
      new RegExp(escaped, 'gi'),
      (match) => `<span style="background-color: ${highlightObj.color}; border-radius:4px; padding:2px;">${match}</span>`
    );
  };


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
      {/* Header */}
      <h5 style={{ fontWeight: 600, color: '#000', width: '95%' }}>
        {current.label}
      </h5>

      {/* Title */}
      {contentTitle[pageIndex] && (
        <p
          style={{
            color: '#22242C',
            fontSize: '15px',
            width: qa.showScript ? '70%' : '95%'
          }}

          data-id={`mainTitle-${contentTitle[pageIndex]}`}
          dangerouslySetInnerHTML={{
            __html: applyHighlight(contentTitle[pageIndex], `mainTitle-${contentTitle[pageIndex]}`),
          }}
        />

      )}

      {/* Script Accordion */}
      {script && qa.showScript && (
        <div style={{ position: 'absolute', top: 10, right: 20 }}>
          <div className="accordion" id="scriptAccordion" style={{ width: 255, borderRadius: 4, overflow: 'hidden' }}>
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
                  data-id={`script-${script}`}
                  dangerouslySetInnerHTML={{
                    __html: applyHighlight(script, `script-${script}`),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
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
                <p
                  key={qa}
                  style={{ maxWidth: '100%', color: '#444', fontSize: 15, padding: '16px 0' }}
                  data-id={`qatitle-${qa}`}
                  dangerouslySetInnerHTML={{
                    __html: applyHighlight(qa.title, `qatitle-${qa}`),
                  }}
                />
              </div>
            );
          }

          // FAQs with Highlight
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
                      <div
                        style={{ color: '#22242C', fontSize: '15px', lineHeight: '20px' }}
                        data-id={`faq-${i}`}
                        dangerouslySetInnerHTML={{
                          __html: applyHighlight(faq.answer, `faq-${i}`),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ));
          }

          // Unordered Options
          if (qa.unorderOption) {
            return (
              <ul style={{ marginBottom: 20 }}>
                {qa.unorderOption.map((item, idx) => (
                  <li
                    key={idx}
                    style={{ marginBottom: 10 }}
                    data-id={`Unordered-${idx}`}
                    dangerouslySetInnerHTML={{
                      __html: applyHighlight(item.opt, `Unordered-${idx}`),
                    }}
                  />
                ))}
              </ul>
            );
          }

          // Notes + Export
          if (qa.notes) {
            return (
              <div style={{ marginBottom: 20 }}>
                {qa.notes.map((item, idx) => (
                  <p
                    key={idx}
                    style={{ fontSize: 16, fontWeight: 400, color: '#22242C' }}
                    data-id={`notes-${idx}`}
                    dangerouslySetInnerHTML={{
                      __html: applyHighlight(item.opt, `notes-${idx}`),
                    }}
                  />

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
                    marginTop: 20,
                  }}
                >
                  Export MY Notes
                </Button>
              </div>
            );
          }

          // Screenshots
          const widthMap = { doctorNote: '65%', textMessage: '50%', image: '50%' };
          if (widthMap[qa.type]) {
            const altMap = {
              doctorNote: 'Email screenshot',
              textMessage: 'Text message screenshot',
              image: 'Image',
            };
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

      {/* Highlighter / Notes Popup */}
      {showNewNotePopup && (
        <div
          style={{
            position: 'absolute',
            top: '210px',
            left: '290px',
            width: '292px',
            backgroundColor: '#FFF',
            border: '1px solid #D4D4D4',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            zIndex: 11,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span
              className="material-icons"
              onClick={() => setShowNewNotePopup(false)}
              style={{ fontSize: '20px', color: '#777', cursor: 'pointer', paddingBottom: '6px' }}
            >
              close
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '68px',
              border: '1px solid #D4D4D4',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {['Highlight', 'Take Notes'].map((t) => (
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
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
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

          {noteTab === 'Take Notes' ? (
            <textarea
              style={{
                width: '100%',
                height: '230px',
                marginTop: '12px',
                padding: '12px',
                border: '1px solid #D4D4D4',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                resize: 'none',
              }}
              placeholder="Write your note here..."
            />
          ) : (
            <div
              style={{
                height: '52px',
                border: '1px solid #D4D4D4',
                borderRadius: '8px',
                padding: '12px',
                marginTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {hightLightColor.map((item) => (
                < div
                  key={item.colorValue}
                  onClick={() => {
                    if (currentHighlightId && highlightedText) {
                      const newHighlight = {
                        text: highlightedText,
                        color: item.colorValue,
                      };
                      setHighlights((prev) => {
                        const updated = {
                          ...prev,
                          [currentHighlightId]: newHighlight,
                        };
                        localStorage.setItem('highlights', JSON.stringify(updated));
                        return updated;
                      });

                      setShowNewNotePopup(false);
                    }
                  }}


                  style={{
                    width: item.color === 'NONE' ? '55px' : '27px',
                    height: '27px',
                    borderRadius: '4px',
                    border: selectedHighlightColor === item.color ? '2px solid #007BFF' : '1px solid #D4D4D4',
                    backgroundColor: item.color === 'NONE' ? 'transparent' : item.color,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#555',
                  }}
                >
                  {item.color === 'NONE' && 'NONE'}
                </div>
              ))}
            </div>
          )}
        </div>
      )
      }

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
                backgroundColor:
                  qa.type === 'video' && !videoEnded ? '#D4D4D4' : '#BD6697',
                color:
                  qa.type === 'video' && !videoEnded ? '#707070' : '#FFFFFF',
                borderColor:
                  qa.type === 'video' && !videoEnded ? '#D4D4D4' : '#BD6697',
                bottom: 5,
                marginTop: 5,
                cursor: qa.type === 'video' && !videoEnded ? 'not-allowed' : 'pointer',
              }}
            >
              Start →
            </Button>
          )
          :
          //  Navigation Buttons
          (
            <div
              className="d-flex"
              style={{ position: 'absolute', bottom: 15, gap: 10, width: '100%', justifyContent: 'flex-end', right: 15 }}
            >
              <Button
                variant="secondary"
                onClick={handlePrev}
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
                }}
              >
                ← Back
              </Button>
              {!isLastPageOfTab4 && (
                <Button
                  variant="secondary"
                  onClick={handleNext}
                  disabled={qa.type === 'video' && !videoEnded}
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
                  }}
                >
                  Next →
                </Button>
              )}
            </div>
          )
      }
    </div >
  );
};
export default RightPanel;