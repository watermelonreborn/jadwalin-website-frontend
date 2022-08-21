import './App.css';
import Home from './pages/Home';
import Connect from './pages/Connect';
import Code from './pages/Code'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connect" element={<Connect/>} />
      <Route path="/code" element={<Code/>} />
    </Routes>
  );
}

export default App;
