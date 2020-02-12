import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import NavBar from '../components/subComponents/NavBar'

import '../index.css'
// import Modal from './modal'


/* 

*/
class Photonics extends Component{
    constructor(){
        super()
        this.photonic=React.createRef()
        this.state={
        }
    }
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    render(){
    let body;
        body = (
            <section id="Photonics">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    
                    <NavBar/>
    
                    <div class="padding-60  margin-top-100 " >
                                <div class="container  text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div class="row " id="photonic">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/photonics5.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1 class="margin-top-100">Nonlinear Photonic Quantum Chips</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={this.photonic} class="container text-align-center">
                                    <div class="row">
                                        <p class="animated wow fadeInLeft slower">At Quest, we develop room-temperature quantum processing chips with single photons as qubits chips using thin-film lithium niobate on insulator. 
                                            A single chip will integrate quantum-state generation, manipulation, logic gates, and eventually 
                                             detection as well. The current team effort is focused on increasing the photon-photon interaction strength, where further minimizing the on-chip propagation loss. </p>
                                        <ol>
                                        <li class="animated wow fadeInRight slower"><p><strong>Generation</strong> We generated high-purity photon pairs in periodical poled lithium niobate nanowaveguides <a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-2-10-2914"> OSA Continuum 2, 2914-2924 (2019)</a></p></li>
                                        <li class="animated wow fadeInLeft slower"><p><strong>Manipulation</strong>. 
                                         We achieved high-extinction electro-optic modulation via a cascaded Mach–Zehnder interferometer <a href="https://www.osapublishing.org/ol/abstract.cfm?uri=ol-44-5-1265">Opt. Lett. 44, 1265-1268 (2019)</a>. 
                                        For linear and nonlinear circuits, we developed ultra-efficient optical frequency conversion devices <a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-1-1-229"> OSA Continuum 1, 229-242 (2018)</a>
                                               For high fidelity quantum computing, we first-time observed Quantum Zeno effect on chip
                                         <a href="https://www.nature.com/articles/s41598-017-13327-x#citeas"> [Sci Rep 7, 14831 (2017)]</a>, which paves the way for manipulation and interaction of 
                                         photons without decoherence.</p> </li>
                                        <li class="animated wow fadeInRight slower"><strong>Detection</strong> we are upgrading our system to four-channel Superconducting Nanowire Single Photon Detector (SNSPD, ID281) with up to 90% efficiency. </li>
                                        </ol>
                                        <p class="animated wow fadeIn slower">With continuous advancement of our quantum technology, deterministic, room-temperature, scalable nonlinear photonic quantum processors will be possible in the near future</p>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row margin-100-100"></div>
                                </div>
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row">
                                                <h3>References</h3>
                                    </div>
                                    <div class="row">
                                        <p><a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-2-10-2914">[1] OSA Continuum 2, 2914-2924 (2019)</a></p>
                                    </div>
                                    <div class="row"><p><a href="https://www.osapublishing.org/ol/abstract.cfm?uri=ol-44-5-1265">[2]Opt. Lett. 44, 1265-1268 (2019)</a></p></div>
                                    <div class="row"><p><a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-1-1-229"> [3] OSA Continuum 1, 229-242 (2018)</a></p></div>
                                    <div class="row"><p><a href="https://www.osapublishing.org/optica/abstract.cfm?uri=optica-6-9-1244"> [4]Optica 6, 1244-1245 (2019)</a></p></div>
                                    <div class="row"><p><a href="https://www.nature.com/articles/s41598-017-13327-x#citeas">  [5]Sci Rep 7, 14831 (2017) doi:10.1038/s41598-017-13327-x</a></p></div>
                                    </div>
                    <hr/>
                <footer class="bg-black small text-center text-white-50">
                    <div class="container">
                    Copyright &copy; Quest Stevens EDU 2019
                    </div>
                </footer>
            </section>
        )
    return body;
}
}

export default Photonics;
