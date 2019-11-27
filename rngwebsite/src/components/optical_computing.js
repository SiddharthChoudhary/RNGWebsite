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
                    <div class="row bg-light padding-60">
                            <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h1>What is Optical Quantum Computing?</h1>
                                <img src="img/res/OpticalComputing.png"></img>
                                <p class="">Our interests are to develop a fully integrated optical chip to realize quantum neural network computing in an power-efficient way, which is much faster than classical neural networks.</p>
                            </div>
                            </div>
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h1>What is EOM?</h1>
                                <img src="img/res/EOM.jpg"></img>
                                <p class="">We utilize Electro-optical effect of Lithium niobate to develop Electro-optical modulators with ultra-high modulation extinction and ultra-low Pi-shift voltage, which is pivot of telecommunication and quantum communication.</p>
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
