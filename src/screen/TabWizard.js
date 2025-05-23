import React, { useState, useEffect } from 'react';
import LeftPanel from '../components/LeftPanel/LeftPanel';
import RightPanel from '../components/RightPanel/RightPanel';
import { RIGHT_CONFIG } from '../data/RIGHT_CONFIG';
import './style.css';

const TABS = ['main', 'tab2', 'tab3', 'tab4'];

const TabWizard = ({ onTabChange, onProgress }) => {
  const [tabIdx, setTabIdx] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const currentTab = TABS[tabIdx];
  const pages = RIGHT_CONFIG[currentTab]?.contentPages || [];

  // Reset pageIndex & notify App.js when the tab key changes
  useEffect(() => {
    setPageIndex(0);
    onProgress?.(currentTab);
  }, [currentTab]);

  return (
    <div className="tabContainer">
      {/* Left Sidebar */}
      <div className="tabLeft">
        <LeftPanel
          tab={currentTab}
          pageIndex={pageIndex}
          onPageSelect={setPageIndex}
          showExtraButtons={tabIdx > 0}
        />
      </div>

      {/* Right Content */}
      <div className="tabRight">
        <RightPanel
          tab={currentTab}
          pageIndex={pageIndex}
          onPageChange={setPageIndex}
          showVideoPage={currentTab === 'main'}
          onStart={() => { }}
          onFinishTab={() => {
            if (pageIndex < pages.length - 1) {
              setPageIndex(i => i + 1);
            } else if (tabIdx < TABS.length - 1) {
              setTabIdx(i => i + 1);
              onTabChange?.(currentTab);
            }
          }}
          onPrevTab={() => {
            if (pageIndex > 0) {
              // back up within this tab
              setPageIndex(i => i - 1);
            }
            else if (tabIdx > 0) {
              // move to the previous tab
              setTabIdx(i => i - 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TabWizard;
