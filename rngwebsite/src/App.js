import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Dashboard from './components/dashboard'
import QRNGCorrelated from './components/qrngcorrelated'
import linkApp from './components/linkApp'
import normal from './components/subComponents/normal'
import arbitrary from './components/subComponents/arbitrary'
import MainPage from './components/mainPage'
import uniform from './components/subComponents/uniform'
import qrng from './components/qrng'
import Team from './components/team'
import ListFiles from './components/listFiles'
function App() {
  return (
    <Router>  
      <div classname="App-header">
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/uniform" component={uniform}/>
      <Route exact path="/team" component={Team}/>
      <Route exact path="/arbitrary" component={arbitrary}/>
      <Route exact path="/normal" component={normal}/>
      <Route exact path="/qrng" component={qrng}/>
      <Route path="/qrngCorrelated" component={QRNGCorrelated}/>
      <Route path="/linkApp" component={linkApp}/>
      <Route exact path="/listFiles" component={ListFiles}/>
      </div>
    </Router>
  );
}

export default App;
