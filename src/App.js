import React, { useState } from 'react';
import './App.css';
import Header from './components/Heaader/Header';
import TabWizard from './screen/TabWizard';
import BottomPanel from './components/BottomPanel/BottomPanel';

const headerConfig = {
  main: {
    title: 'Chapter 2: Investigate Development: Real-Life Applications',
    color: '#BD6697',
    bgColor: '#B9508C1A'
  },
  tab2: {
    title: 'Chapter 2: Investigate Development: Real-Life Applications',
    color: '#67BC46',
    bgColor: '#0F89071A'
  },
  tab3: {
    title: 'Chapter 2: Investigate Development: Real-Life Applications',
    color: '#F89B1B',
    bgColor: '#C257001A'
  },
  tab4: {
    title: 'Chapter 2: Investigate Development: Real-Life Applications',
    color: '#009FDA',
    bgColor: '#0071DB1A'
  },
};

function App() {
  const [activeTab, setActiveTab] = useState('main');
  const [inProgress, setInProgress] = useState('main');
  const { title, color, bgColor } = headerConfig[activeTab] || headerConfig.main;

  const [tabStates, setTabStates] = useState({
    main: 'default',
    tab2: 'default',
    tab3: 'default',
    tab4: 'default',
  });

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
    setTabStates((prev) => ({
      ...prev,
      [tab]: 'viewed',
    }));
  };

  const handleSetInProgressTab = (tab) => {
    setInProgress(tab)
    setTabStates((prev) => ({
      ...prev,
      [tab]: 'active'
    }));
  };


  return (
    <div className="App">
      <div className="centered">
        <Header title={title} color={color} bgColor={bgColor} />
        <TabWizard onTabChange={handleSetActiveTab} onProgress={handleSetInProgressTab} />
        <BottomPanel
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
          tabStates={tabStates}
          inProgress={inProgress}
        />
      </div>
    </div>
  );
}

export default App;
