import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import NavBar from '../components/subComponents/NavBar'

import '../index.css'
// import Modal from './modal'


/* 

*/
class IOT extends Component{
    constructor(){
        super()
        this.IOT=React.createRef()
        this.state={
        }
    }
    // const handleShow = () => setShow(true);
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    // const handleClose = () => setShow(false);
    render(){
    let body;
        body = (
            <section id="IOT">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <NavBar/>
     
    
                    <div class="padding-60  margin-top-100 " >
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div class="row " id="iot">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/iot_2.png"></img>
                                            </div>
                                            <div ref={this.IOT} class="animated wow fadeInRight slower col-sm-6">
                                                <h1>QUANTUM COMPUTING and IOT</h1>
                                                <p>Quantum Internet of Things (QIoTs) is Internet of Things (IoTs)  embedding Quantum Keys Distribution (QKD). </p>
                                            </div>
                                        </div>
                                        <div class="row"></div>
                                        <div>
                                        <p class="animated wow fadeIn slower">IoTs being developed on low computing power devices, does not focus on security. This raises a severe threat not only to the IoT devices, but also to all devices within the network. At QuEST lab, we utilize the unconditional randomness and entanglement of photons to secure IoTs devices from the man-in-the-middle attack by deploying our QKD system to encrypt and decrypt all information exchange between each communicating nodes on the internet.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row"><div><p></p></div><div><p></p></div><div></div><div></div></div>
                                <div class="text-align-center"><h1>OSI LAYER</h1></div>
                                <div class="container text-align-center font-size-only-x-large">
                                    <div class="row">
                                        <p class="animated wow fadeInLeft slower">Quantum link shares one-time-pad true random keys for encryption/decryption between Quantum Gateways.</p>
                                        <p class="animated wow fadeInRight slower">Quantum Gateways act as a bridge between the IoTs devices and the world. And it is connected to Quantum link as well as the internet.</p>
                                        <p class="animated wow fadeInLeft slower">The encrypted data is sent to the receiver’s Quantum Gateway via internet, which decrypts and forwards the information to the receiver.</p>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row margin-100-100"></div>
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

export default IOT;
