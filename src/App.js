// import logo from './logo.svg';
import './App.css';
import Header from './components/Heaader.js/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';
import BottomPanel from './components/BottomPanel/BottomPanel';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="d-flex align-items-center">
      <LeftPanel />
      <RightPanel />
    </div>

    <BottomPanel />

    </div>
  );
}

export default App;
