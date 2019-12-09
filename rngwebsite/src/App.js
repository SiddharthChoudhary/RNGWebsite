import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,HashRouter,Route,browserHistory,Switch,Link} from 'react-router-dom'
import Dashboard from './components/dashboard'
import normal from './components/subComponents/normal'
import arbitrary from './components/subComponents/arbitrary'
import MainPage from './components/mainPage'
import uniform from './components/subComponents/uniform'
import qrng from './components/qrng'
import BioMedic from './components/biomedical_image'
import ScrolltoTop from 'react-router-scroll-top'
import Team from './components/team'
import OpticalComputing from './components/optical_computing'
import RemoteSensing from './components/remoteSensing'
import IOT from './components/iot'
import Photonics from './components/photonics';
function App() {
  return (
    <HashRouter basename="/">
      <Switch>
      <ScrolltoTop>
      <div classname="App-header">
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/uniform" component={uniform}/>
      <Route exact path="/team" component={Team}/>
      <Route exact path="/arbitrary" component={arbitrary}/>
      <Route exact path="/normal" component={normal}/>
      <Route exact path="/qrng" component={qrng}/>
      <Route exact path="/biomedic" component={BioMedic}/>
      <Route exact path="/photonics" component={Photonics}/>
      <Route exact path="/iot" component={IOT}/>
      <Route exact path="/optical" component={OpticalComputing}/>
      <Route exact path="/remotesensing" component={RemoteSensing}/>
      </div>
      </ScrolltoTop>
      </Switch>
    </HashRouter>
  );
}

export default App;
