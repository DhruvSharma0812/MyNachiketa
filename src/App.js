import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/home.js';
import Leaderboad from './Pages/Leaderboards.js';
import Profile from './Pages/Profile.js'
import Tournaments from './Pages/Tournaments.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leaderboad" element={<Leaderboad />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tournaments" element={<Tournaments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
