// import logo from './logo.svg';
import './App.css';
import Header from './components/Heaader.js/Header';
import BottomPanel from './components/BottomPanel/BottomPanel';
import MainPanel from './components/MainPanel/MainPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPanel />
      <BottomPanel />
    </div>
  );
}

export default App;