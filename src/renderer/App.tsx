import './App.css';

import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';

import SwaggerInput from './views/auth/login/analyse';

function Hello() {
  return (
    <div>
      <SwaggerInput />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
