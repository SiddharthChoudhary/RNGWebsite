import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import '../index.css'
// import Modal from './modal'


/* 

*/
class BioMedic extends Component{
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
            <section id="BioMedic">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <div class="row bg-light padding-60">
                            <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h1>What is BioMedical Imagening?</h1>
                                <img src="img/biomedic.png"></img>
                                <p class="">Imaging through strongly scattering media remains a quest of importance in many areas, particularly for in vivo biomedical imaging through human soft tissues. In battles against cancer, early detection and diagnosis are essential in preventing tumors from reaching critical or fatal levels where invasive surgery or chemotherapy become necessary treatments. Identifying and treating cancer at a subtle level before growing into problematic tumors will save many lives, but early detection of just a few cancer cells is impossible due to the multi-scattering of light in human tissues. At Quest Lab, we seek to remedy this problem. By mode-selective detection of ballistic backscattered photons, we demonstrate non-invasive 3D imaging of a target occluded by strongly scattering media with optical depth reaching 9.4 (18.8 round trip). The imager, using milliWatt illuminating power and placed 50 cm from the target, achieves millimeter depth resolution with only 2.0x10-5 detected photons/pulse. This technique can find a variety of imaging applications, particularly those in biomedical imaging using in situ measurements through deep living tissues.</p>
                            </div>
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

export default BioMedic;
