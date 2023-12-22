import './App.css';
import Home from './pages/Login';
import FacultyHistory from './pages/FacultyLeaveHistory';
import { Route,Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <Home />
        <FacultyHistory />

     
      

    </React.Fragment>
  );
}

export default App;
