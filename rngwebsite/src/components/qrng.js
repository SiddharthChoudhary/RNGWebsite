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
            <section id="qrng">
                <link href="css/grayscale.css" rel="stylesheet"/>
                    {/* <div class="row mb-5"></div> */}
                    <div class="row bg-light padding-60">
                            <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h1>What is Quantum Random Number Generation?</h1>
                                <p class="">QuEST quantum random number generator (QRNG) exploits pure randomness based on measuring the arrival time of single photons. This method utilizes inherently random quantum mechanical processes whose fundamentally unpredictable nature. Photon temporal waveforms are shaped using electro-optical modulator (EOM) to provide arbitrary probability distributions. QuEST QRNG is implemented on monolithic integrated photonics chip including lithium niobate PPLN waveguide, EOM, and beamsplitters. Digital data is acquired by Time-to-Digital converter via Zynq FPGA.</p>
                            </div>
                            </div>
                    </div>
                    <hr/>
                <div class="row team-section bg-light padding-60">
                    <div class="row">
                            <div class="row">
                                <h1>Uniform Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-6 col-lg-8">
                                <div class="featured-text text-center text-lg-left">
                                <p class="text-black-50 mb-0">Uniform QRNs is created by switching off RF pulses. Each photon is equally likely to be detected in any bin over a period of a reference signal, thus creating high-dimensional, uniform RNs. Entropy estimation: <span class="text-black-50">0.9987 per bit.</span> </p>
                                <p class="text-black-50">Randomness tests: <a href="https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-22r1a.pdf"> NIST SP 800-22 </a>  and R. G. Brown, D. Eddelbuettel, and D. Bauer Dieharder<a href="http://www.phy.duke.edu/rgb/General/dieharder.php">: &nbsp; A Random Number Test Suite</a> </p>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2"></div>
                            <div class="col-xl-4 col-lg-2">
                            <Button variant="dark"><Link to="/uniform">Uniform</Link></Button>
                            </div>
                            </div>
                    </div>
                </div>
                <hr/>
                <div class="row team-section bg-light padding-60">
                    <div class="row">
                            <div class="row">
                                <h1>Normal Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-6 col-lg-8">
                                <div class="featured-text text-center text-lg-left">
                                <p class="text-black-50 mb-0">Normal QRNs is created from shaping photon temporal profile into Gaussian distribution by manipulating RF pulses.Entropy estimation: <span>0.877 per bit.</span>Randomness tests: NIST SP 800-22 after convert the generated Gaussian-distributed QRNs to uniform random numbers via the inverse Box–Muller transformation </p>                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2"></div>
                            <div class="col-xl-4 col-lg-2">
                            <Button variant="dark"><Link to="/normal">Normal</Link></Button>
                            </div>
                            </div>
                    </div>
                </div>
                <hr/>
                <div class="row team-section bg-light padding-60">
                    <div class="row">
                            <div class="row">
                                <h1>Arbitrary Distribution</h1>
                            </div>
                            <div class="row margin-top align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-6 col-lg-8">
                                <div class="featured-text text-center text-lg-left">
                                <p class="text-black-50 mb-0">While certain non-uniform random numbers can be numerically constructed from uniform ones, the procedures are usually time-consuming and computationally complicated, while also prone to adversary interference. For example, random variate generation of non-uniform distributions relies on precise information of hazard rate, density,cumulative distribution function, distribution mode, inverse function, etc. Moreover, for each distribution, a specific algorithm needs to be developed and optimized individually. In light of this challenge, QuEST lab provides the first and only QRNG with the capability of directly generating user-defined probability distribution genuine RNs.  </p>                                
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2"></div>
                            <div class="col-xl-4 col-lg-2">
                            <Button variant="dark"><Link to="/arbitrary">Arbitrary</Link></Button>
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
