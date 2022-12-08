import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Child from './Child/Child'
import Parent from './Parent/Parent'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/child" element={<Child/>}/>
          <Route exact path="/parent" element={<Parent/>}/>
        </Routes>
    </Router>
  );
}


export default App;
