import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

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
                <div class="row mb-5"></div>
                <div class="row bg-light no-gutters mb-5 mb-lg-0">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h1>What is Quantum Random Number Generation?</h1>
                            <p class="">A description explaining that how the api works.</p>
                    </div>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <h3>Try the API</h3>
                </div>
                <div class="row mb-5 justify-content-center">
                        <div class="col">
                            <div>
                            <Button variant="dark"><Link to="/uniform">Uniform</Link></Button>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                            <Button variant="dark"><Link to="/normal">Normal</Link></Button>
                            </div>
                        </div>
                        <div class="col">
                            <div>
                            <Button variant="dark"><Link to="/arbitrary">Arbitrary</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div>
                </div>
                <div class="row team-section bg-light">
                    <div class="container">
                    <div class="row">
                        <div class="container">
                            <div class="row margin-top-minus-100">
                                <h1>Uniform Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-4 col-lg-5">
                                <div class="featured-text text-center text-lg-left">
                                <p class="text-black-50 mb-0">Your stuff goes here</p>
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
                <div class="row team-section bg-light">
                    <div class="container">
                    <div class="row">
                        <div class="container">
                            <div class="row margin-top-minus-100">
                                <h1>Normal Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-4 col-lg-5">
                                <div class="featured-text text-center text-lg-left">
                                <p class="text-black-50 mb-0">Your stuff goes here</p>
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
                <hr/>
                <div class="row team-section bg-light">
                    <div class="container">
                    <div class="row">
                        <div class="container">
                            <div class="row margin-top-minus-100">
                                <h1>Arbitrary Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="featured-text text-center text-lg-left">
                                    <p class="text-black-50 mb-0">Your stuff goes here</p>
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
                            <div class="row margin-top">
                                <h5>For example: </h5>
                                <p class="text-black-50"> http://quest.phy.stevens.edu:5050/normalDistribution?lower=0&higher=10&amount=10</p>
                            </div>
                            </div>
                            <div class="row margin-top">
                                <h2 class="mb-5">Send an email with your specifications!</h2>
                            </div>
                            </div>
                            <div class="row margin-top">
                                <form method="post" class="form-inline d-flex" action="mailto:schoud2@stevens.edu">
                                    <textarea rows="3" cols="50" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="textname" placeholder="Your text"></textarea>
                                    <a href="mailto:lnguyen1@stevens.edu"><button type="submit" class="btn btn-primary mx-auto">Send</button></a>
                                </form>
                            </div>
                        </div>
                        </div>
                <hr/>
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
