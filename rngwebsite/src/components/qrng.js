import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
// import Modal from './modal'


/* 

*/
class Qrng extends Component{
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
            <section>
                <link href="css/grayscale.css" rel="stylesheet"/>
                <div class="container">
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6">
                    <img class="img-fluid" src="img/demo-image-01.jpg" alt=""/>
                    </div>
                    <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">Uniform Distribution</h4>
                            <p class="mb-   0 text-white-50">A description explaining that how the api works.</p>
                            <hr class="d-none d-lg-block mb-0 ml-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <hr/>
                <div class="row mb-5 justify-content-center">
                    <div>
                    <Button variant="dark">1.0</Button>
                    </div>
                    <div>
                    </div>
                </div>
                <div class="row team-section bg-light">
                        <div class="container">
                        <div class="row">
                             <div class="container">
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                        <h4>API SYNTAX</h4> <p><a href="http://35.192.39.81:5050/main?lower=0&higher=10&amount=10">TryNow</a></p>
                        <p class="text-black-50 mb-0">http://quest.phy.stevens.edu:5050/main</p>
                        </div>
                    </div>
                    </div>
                        <div class="row">
                            <p>Necessary parameters for the API</p>
                        </div>
                        <div class="row">
                            where 
                            <span class="text-black-50">&nbsp; lower &nbsp; </span> is the minimum range (cannot go less than 0)
                        </div>
                        <div class="row">
                            where <span class="text-black-50">&nbsp; higher &nbsp; </span> is the maximum range
                        </div>
                        <div class="row">
                            where <span class="text-black-50">&nbsp; amount &nbsp; </span> is the number of random numbers you want (cannot go less than 500)
                        </div>
                        <div class="row margin-top"></div>
                        <div class="row margin-top">
                            <h5>For example: </h5>
                            <p class="text-black-50"> http://quest.phy.stevens.edu:5050/main?lower=0&higher=10&amount=10</p>
                        </div>
                        </div>

                        </div>
                        </div>
                </div>
                <hr/>
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                    <img class="img-fluid" src="img/demo-image-02.jpg" alt=""/>
                    </div>
                    <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Normal Distribution</h4>
                            <p class="mb-0 text-white-50">A description explaining that how the api works and what is Uniform Distribution all about</p>
                            <hr class="d-none d-lg-block mb-0 mr-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row team-section bg-light">
                        <div class="container">
                        <div class="row">
                             <div class="container">
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                        <h4>API SYNTAX</h4> <p><a href="http://35.192.39.81:5050/normalDistribution?lower=0&higher=10&amount=10">TryNow</a></p>
                        <p class="text-black-50 mb-0">http://quest.phy.stevens.edu:5050/normalDistribution</p>
                        </div>
                    </div>
                    </div>
                        <div class="row">
                            <p>Necessary parameters for the API</p>
                        </div>
                        <div class="row">
                            where 
                            <span class="text-black-50">&nbsp; lower &nbsp; </span> is the minimum range (cannot go less than 0)
                        </div>
                        <div class="row">
                            where <span class="text-black-50">&nbsp; higher &nbsp; </span> is the maximum range
                        </div>
                        <div class="row">
                            where <span class="text-black-50">&nbsp; amount &nbsp; </span> is the number of random numbers you want (cannot go less than 500)
                        </div>
                        <div class="row margin-top"></div>
                        <div class="row margin-top">
                            <h5>For example: </h5>
                            <p class="text-black-50"> http://quest.phy.stevens.edu:5050/normalDistribution?lower=0&higher=10&amount=10</p>
                        </div>
                        </div>

                        </div>
                        </div>
                </div>
                </div>
                <section id="team" class="team-section bg-light">
                    <div class="container">
                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                        <h4>Know More About Us</h4>
                        <p class="text-black-50 mb-0">For More Information Stay Connected</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
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

export default Qrng;
