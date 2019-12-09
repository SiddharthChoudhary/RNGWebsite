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
        this.BioMedic=React.createRef()
        this.state={
        }
    }
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    render(){
    let body;
        body = (
            <section id="BioMedic">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                        <a class="navbar-brand js-scroll-trigger" href="/">
                            <img class="mx-auto max-width-height-300" src={"img/logo.png"}></img>
                        </a>
                        <div class="container">
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger nav-items font-color-black" onClick={()=>this.scrollToMyRef(this.BioMedic)}>BioMedical</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    <div class="padding-60  margin-top-100">
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div ref={this.BioMedic} class="row " id="BioMedic">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/biomedic.png"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>BioMedical Imaging</h1>
                                            </div>
                                            <div class="text-align-center">
                                                    <p class="animated wow fadeIn slower">Imaging through strongly scattering media remains a quest of importance in many areas, particularly for in vivo biomedical imaging through human soft tissues. In battles against cancer, early detection and diagnosis are essential in preventing tumors from reaching critical or fatal levels where invasive surgery or chemotherapy become necessary treatments.</p>
                                                    <p class="animated wow fadeInLeft slow">Identifying and treating cancer at a subtle level before growing into problematic tumors will save many lives, but early detection of just a few cancer cells is impossible due to the multi-scattering of light in human tissues. </p>
                                                    <p class="animated wow fadeInRight slow">At Quest Lab, we seek to remedy this problem. By mode-selective detection of ballistic backscattered photons, we demonstrate non-invasive 3D imaging of a target occluded by strongly scattering media with optical depth reaching 9.4 (18.8 round trip). The imager, using milliWatt illuminating power and placed 50 cm from the target, achieves millimeter depth resolution with only 2.0x10-5 detected photons/pulse. This technique can find a variety of imaging applications, particularly those in biomedical imaging using in situ measurements through deep living tissues</p>
                                            </div>
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
