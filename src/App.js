import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/" element={<Dashboard/>}/>
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
