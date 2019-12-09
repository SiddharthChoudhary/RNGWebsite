import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import '../index.css'
// import Modal from './modal'


/* 

*/
class OpticalComputing extends Component{
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
            <section id="OpticalComputing">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
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
                                <a class="nav-link js-scroll-trigger nav-items font-color-black" href="#optical">OPTICAL COMPUTING</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
    
                    <div class="padding-60  margin-top-100">
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div class="row " id="optical">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/OpticalComputing.png"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>Optical Quantum Computing</h1>
                                                <p>Our interests are to develop a fully integrated optical chip to realize quantum neural network computing in an power-efficient way, which is much faster than classical neural networks.</p>
                                            </div>
                                            <div class="animated wow fadeIn slower col-sm-12">Modern classic computing is integrating billions of electrical components and people are trying to make this number larger in order to make the computer more powerful. However, people are hitting the limitation since classic knowledge will no longer valid when the components are getting smaller and smaller. To break through this limitation and make computer much more powerful, we aim to develop quantum optical computing by utilizing quantum mechanics and quantum entanglements. </div>
                                            <div class="animated wow fadeIn slower col-sm-12">Taking advantage of special properties of Lithium niobate material, we are able to develop fully integrated optical circuits. Using quantum computing scheme and artificial neural network, we are going to make such quantum optical circuit more powerful and intelligent than classic computer.</div>
                                    </div>
                                    <div class="row margin-top-100" id="optical">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/EOM.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>EOM</h1>
                                                <p>We utilize Electro-optical effect of Lithium niobate to develop Electro-optical modulators with ultra-high modulation extinction and ultra-low Pi-shift voltage, which is pivot of telecommunication and quantum communication.</p>
                                            </div>
                                            <div class="animated wow fadeIn slower col-sm-12"><p>Electro-optical modulator is the pivotal component in modern fiber optical communication as well as quantum optical computing which is to convert electrical signals to optical signals. However, the existing commercial EOM is over 10 cm and with large driving voltage (over 5 volts). So, our aim here is to develop on-chip EOM with mm footprint and millivolt driving voltage that will be much energy efficient and compatible for large integration.</p></div>
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
