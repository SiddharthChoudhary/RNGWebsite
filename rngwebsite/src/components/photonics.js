import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import '../index.css'
// import Modal from './modal'


/* 

*/
class Photonics extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    render(){
    let body;
        body = (
            <section id="Photonics">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top background-color-transparent" id="mainNav">
                        <a class="navbar-brand js-scroll-trigger" href="/#page-top">
                            <img class="mx-auto max-width-height-300" src={"img/logo.PNG"}></img>
                        </a>
                        <div class="container">
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger nav-items font-color-black" href="#photonic">Photonic</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
    
                    <div class="row bg-light padding-60 margin-top-100">
                            <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left" id="photonic">
                                <h1>What is Non Linear Photonic Quantum Computing?</h1>
                                <img src="img/photonics.jpg"></img>
                                <p class="">At Quest group, we are devoted to building world's first Nonlinear Photonic Quantum Computing based on thin-film lithium niobate on insulator platform, as shown in the schematic. Photons are the Qubits discussed here. The system generally consists of three main parts: I, Generation, II, Manipulation and III, Detection (not shown here). Toward this goal, our team work hard to the formidable technical mastery of the fabrication of integrated quantum photonic devices. </p>
                                <p class="">I, Generation, we demonstrated the high purity (CAR>600) photon-pairs in periodical poled lithium niobate nanowaveguides [OSA Continuum 2, 2914-2924 (2019)].</p>
                                <p class="">II, Manipulation, we achieved high-extinction electro-optic modulation via a cascaded Mach–Zehnder interferometer [Opt. Lett. 44, 1265-1268 (2019)]. For linear and nonlinear circuits, we developed ultra-efficient optical frequency conversion devices [OSA Continuum 1, 229-242 (2018), Optica 6, 1244-1245 (2019)]. For high fidelity quantum computing, we first-time observed Quantum Zeno effect on chip [Sci Rep 7, 14831 (2017)], which paves the way for manipulation and interaction of photons without decoherence.</p>
                                <p class="">III, Detection, we are upgrading our system to four-channel Superconducting Nanowire Single Photon Detector (SNSPD, ID281) with up to 90% efficiency. </p>
                                <p class="">With continuous advancement of our quantum technology, deterministic, room-temperature, scalable nonlinear photonic quantum computing will be made possible in the near future</p>
                            </div>
                            </div>
                            <div class="project-text">
                                <h3>References</h3>
                                <p><a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-2-10-2914"></a>[1] OSA Continuum 2, 2914-2924 (2019)</p>
                                <p><a href="https://www.osapublishing.org/ol/abstract.cfm?uri=ol-44-5-1265">[2]Opt. Lett. 44, 1265-1268 (2019)</a></p>
                                <p><a href="https://www.osapublishing.org/osac/abstract.cfm?uri=osac-1-1-229"> [3] OSA Continuum 1, 229-242 (2018)</a></p>
                                <p><a href="https://www.osapublishing.org/optica/abstract.cfm?uri=optica-6-9-1244"> [4]Optica 6, 1244-1245 (2019)</a></p>
                                <p><a href="https://www.nature.com/articles/s41598-017-13327-x#citeas">  [5]Sci Rep 7, 14831 (2017) doi:10.1038/s41598-017-13327-x</a></p>
                            </div>
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
