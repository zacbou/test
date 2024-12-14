import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import LandingPage from './pages/LandingPage';
    import ResultPage from './pages/ResultPage';
    import './index.css';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
