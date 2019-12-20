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
                                                <p>Our interest are to develop a fully integrated optical chip to realize quantum neural network computing in an power-efficient way, which is much faster than classical neural networks.</p>
                                                <p>Modern classic computing is integrating billions of electrical components and people are trying to make this number larger in order to make the computer more powerful. However, people are hitting the limitation since classic knowledge will no longer valid when the components are getting smaller and smaller. To break through this limitation and make computer much more powerful, we aim to develop quantum optical computing by utilizing quantum mechanics and quantum entanglements.</p>
                                                <p>Taking advantage of special properties of Lithium niobate material, we are able to develop fully integrated optical circuits. Using quantum computing scheme and artificial neural network, we are going to make such quantum optical circuit more powerful and intelligent than classic computer.</p>

                                            </div>
                                            <div class="animated wow fadeIn slower col-sm-12"> </div>
                                            <div class="animated wow fadeIn slower col-sm-12"></div>
                                    </div>
                                    <div class="row margin-top-100" id="optical">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/eom_1.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>EOM</h1>
                                                <p>We utilize Electro-optical effect of Lithium niobate to develop Electro-optical modulators with ultra-high modulation extinction and ultra-low Pi-shift voltage, which is pivot of telecommunication and quantum communication.</p>
                                                <p>Electro-optical modulator is the pivotal component in modern fiber optical communication as well as quantum optical computing which is to convert electrical signals to optical signals. However, the existing commercial EOM is over 10 cm and with large driving voltage (over 5 volts). So, our aim here is to develop on-chip EOM with mm footprint and millivolt driving voltage that will be much energy efficient and compatible for large integration.</p>
                                            </div>
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
