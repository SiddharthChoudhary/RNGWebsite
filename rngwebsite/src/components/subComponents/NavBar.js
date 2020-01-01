import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'
// import Modal from './modal'


/* 

*/
class NavBar extends Component{
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
            <section id="NavBar">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top background-color-transparent" id="mainNav">
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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle js-scroll-trigger nav-items font-color-black" id="navbarDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Research Projects</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/#biomedic">BioMedical Imaging</a>
                            <a class="dropdown-item" href="/#qrng">Quantum Random Numbers</a>
                            <a class="dropdown-item" href="/#photonics" >Integrated Quantum Photonics</a>
                            <a class="dropdown-item" href="/#remotesensing" >Quantum Remote Sensing</a>
                            <a class="dropdown-item" href="/#iot" >Quantum Computing and IOT</a>
                            <a class="dropdown-item" href="/#optical" >Quantum Optical Computing</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/#team">Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/#news">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/#opportunities">Opportunities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" href="/#/#about">About</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </section>
        )
    return body;
}
}

export default NavBar;
