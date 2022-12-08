import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

function About(props) {
    return "About page"
}

function Users(props) {
    return "Users page"
}
function Home(props){
    return "Home page"
}


export default App;
