import React, { useState } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

const MainPanel = () => {
  const [showExtraButtons, setShowExtraButtons] = useState(false);

  return (
    <div style={{ display: 'flex' }} className='mainPanel'>
      <LeftPanel showExtraButtons={showExtraButtons} />
      <RightPanel onStart={() => setShowExtraButtons(true)} />
    </div>
  );
};

export default MainPanel;