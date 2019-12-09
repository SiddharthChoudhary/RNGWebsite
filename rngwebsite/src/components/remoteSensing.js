import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../index.css'


class RemoteSensing extends Component{
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
            <section id="RemoteSensing">
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
                                <a class="nav-link js-scroll-trigger nav-items font-color-black" href="#remotesensing">Remote Sensing</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
    
                    <div class="padding-60  margin-top-100">
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div class="row " id="remotesensing">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/remote_Sensing_3.png"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1>Remote Sensing</h1>
                                            </div>
                                    </div>
                                    <div class="row margin-100-100"></div>
                                    <div class="row ">
                                        <p class="animated wow fadeInLeft slower">Light detection and ranging (LiDAR) has become a versatile tool for many remote sensing applications including 3-dimensional mapping, autonomous navigation, and environmental monitoring. </p>
                                        <p class="animated wow fadeInRight slower">The operating principle of any active LiDAR system is to use the returning optical probe signal to gain information about the target scene. Difficulty arises in remote sensing applications where the returning probe signal is weak and returns along with strong background noise.</p>
                                        <p class="animated wow fadeInLeft slower">Such extreme operating conditions leave conventional LiDAR approaches ineffective. We aim to extend the limit on what can be remotely sensed using our Quantum Enhanced LiDAR system that has demonstrated outstanding performance in signal isolation and background suppression.</p>
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

export default RemoteSensing;