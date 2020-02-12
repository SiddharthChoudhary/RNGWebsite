import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import NavBar from '../components/subComponents/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../index.css'


class RemoteSensing extends Component{
    constructor(){
        super()
        this.RemoteSensing = React.createRef()
        this.state={
        }
    }
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    render(){
    let body;
        body = (
            <section id="RemoteSensing">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    
                    <NavBar/>
    
                    <div class="padding-60  margin-top-100">
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div ref={this.RemoteSensing} class="row " id="remotesensing">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/res/remoteSensing.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                                <h1 class="margin-top-100">Remote Sensing</h1>
                                            </div>
                                    </div>
                                    <div class="row margin-100-100"></div>
                                    <div class="row ">
                                        <p class="animated wow fadeInLeft slower">Light detection and ranging (LiDAR) has become a versatile tool for many remote sensing applications including 3-dimensional mapping, autonomous navigation, and environmental monitoring. </p>
                                        <p class="animated wow fadeInRight slower">The operating principle of any active LiDAR system is to use the returning optical probe signal to gain information about the target scene. Difficulty arises in remote sensing applications where the returning probe signal is weak and returns along with strong background noise.</p>
                                        <p class="animated wow fadeInLeft slower">Such extreme operating conditions render conventional LiDAR approaches ineffective. We aim to extend the limit on what can be remotely sensed using our photonic LiDAR systems based on quantum parametric mode sorting, which has demonstrated outstanding performance in signal isolation, background suppression, and rejection of multiscattering noise.</p>
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
