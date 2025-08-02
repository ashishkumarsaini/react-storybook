import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Components } from 'components'
import { Pages } from 'pages';


const App = () => {
  return (
    <div className="App">
      <Router>

        <Components.Header />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/button" element={<Pages.Button />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
