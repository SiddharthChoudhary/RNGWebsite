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
import BioMedic from './components/biomedical_image'
import ScrolltoTop from 'react-router-scroll-top'
import Team from './components/team'
import OpticalComputing from './components/optical_computing'
import ListFiles from './components/listFiles'
import Photonics from './components/photonics';
function App() {
  return (
    <Router>  
      <ScrolltoTop>
      <div classname="App-header">
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/uniform" component={uniform}/>
      <Route exact path="/team" component={Team}/>
      <Route exact path="/arbitrary" component={arbitrary}/>
      <Route exact path="/normal" component={normal}/>
      <Route exact path="/qrng" component={qrng}/>
      <Route path="/qrngCorrelated" component={QRNGCorrelated}/>
      <Route path="/biomedic" component={BioMedic}/>
      <Route path="/photonics" component={Photonics}/>
      <Route path="/linkApp" component={linkApp}/>
      <Route path="/optical" component={OpticalComputing}/>
      <Route exact path="/listFiles" component={ListFiles}/>
      </div>
      </ScrolltoTop>
    </Router>
  );
}

export default App;
