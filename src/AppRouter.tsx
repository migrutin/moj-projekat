import React from 'react'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import App from './pages/App';

function AppRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/app" element={<App/>} />
            {/* Ostale rute */}
          </Routes>
        </Router>
      );
}

export default AppRouter