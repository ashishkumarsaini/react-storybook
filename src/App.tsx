import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'components/header'
import { Pages } from 'pages';
import './app.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='page-wrapper'>
          <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/button" element={<Pages.Button />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
