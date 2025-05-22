import React, { useState } from 'react';
import './App.css';
import Header from './components/Heaader/Header';
import TabWizard from './screen/TabWizard';
import BottomPanel from './components/BottomPanel/BottomPanel';

const headerConfig = {
  main: {
    title: 'Investigate Development- Post Divorce Adjustment REVISIONS',
    color: '#BD6697',
    bgColor: '#B9508C1A'
  },
  tab2: {
    title: 'Investigate Development- Post Divorce Adjustment REVISIONS',
    color: '#67BC46',
    bgColor: '#0F89071A'
  },
  tab3: {
    title: 'Investigate Development- Post Divorce Adjustment REVISIONS',
    color: '#F89B1B',
    bgColor: '#C257001A'
  },
  tab4: {
    title: 'Investigate Development- Post Divorce Adjustment REVISIONS',
    color: '#009FDA',
    bgColor: '#0071DB1A'
  },
};

function App() {
  const [activeTab, setActiveTab] = useState('main');
  const { title, color, bgColor } = headerConfig[activeTab] || headerConfig.main;

  return (
    <div className="App">
      <div className="centered">
        <Header title={title} color={color} bgColor={bgColor} />
        <TabWizard onTabChange={setActiveTab} />
        <BottomPanel setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
