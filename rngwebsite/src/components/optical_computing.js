import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import NavBar from '../components/subComponents/NavBar'

import '../index.css'
// import Modal from './modal'


/* 

*/
class OpticalComputing extends Component{
    constructor(){
        super()
        this.opticalComputing = React.createRef()
        this.state={
        }
    }
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    render(){
    let body;
        body = (
            <section id="OpticalComputing">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                   <NavBar/>
    
                    <div class="padding-60  margin-top-100">
                                <div class="container text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div ref={this.opticalComputing} class="row " id="optical">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/computing.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>Optical Quantum Computing</h1>
                                                <p>Our interest are to develop fully integrated optical chips to realize quantum neural networks, simulation, and processing with exceptional power efficience, speed, and data volume.</p>
                                                <p>The future of big data processing using digital devices is threatened by the ending of the Moore's law. In this challenge, we develop a new hybrid computing platform using integrated electronics and photonics.</p>
                                                <p>Taking advantage of outstanding optical properties of lithium niobate, we are developing fully integrated optical circuits with efficient interface with FPGA electronics. The merging of quantum optics and artificial neural networks will offer unprecedented computing speed and capabilities.</p>

                                            </div>
                                            <div class="animated wow fadeIn slower col-sm-12"> </div>
                                            <div class="animated wow fadeIn slower col-sm-12"></div>
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

export default OpticalComputing;
