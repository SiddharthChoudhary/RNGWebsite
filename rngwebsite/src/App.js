import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Dashboard from './components/dashboard'
import QRNGCorrelated from './components/qrngcorrelated'
import linkApp from './components/linkApp'
import normal from './components/normal'
import MainPage from './components/mainPage'
import uniform from './components/uniform'
import ListFiles from './components/listFiles'
function App() {
  return (
    <Router>  
      <div classname="App-header">
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/uniform" component={uniform}/>
      <Route exact path="/normal" component={normal}/>
      <Route path="/qrngCorrelated" component={QRNGCorrelated}/>
      <Route path="/linkApp" component={linkApp}/>
      <Route exact path="/listFiles" component={ListFiles}/>

      </div>
    </Router>
  );
}

export default App;
