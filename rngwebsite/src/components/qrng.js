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
        this.uniform = React.createRef()
        this.normal = React.createRef()
        this.arbitrary = React.createRef()
        this.state={
        }
    }
    
    scrollToMyRef = (myref) => window.scrollTo(0, myref.current.offsetTop)   

    render(){
        let body;
        body = (          
            <section id="qrng">
                 <nav id="mainNav" class="navbar navbar-expand-lg navbar-light fixed-top">
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
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger nav-items font-color-black" onClick={()=>this.scrollToMyRef(this.uniform)}>Uniform</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" onClick={()=>this.scrollToMyRef(this.normal)}>Normal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger font-color-black" onClick={()=>this.scrollToMyRef(this.arbitrary)}>Arbitrary</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                    {/* <div class="row mb-5"></div> */}
                    <div class="padding-60  margin-top-100 " >
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div class="row " id="photonic">
                                            <div class=" animated wow fadeInLeft slower col-sm-6">
                                                <img class="rounded-125rem thumbnail max-width-100-img" src="img/photonics.jpg"></img>
                                            </div>
                                            <div class="animated wow fadeInRight slower col-sm-6">
                                            <h1>Quantum Random Number Generation</h1>
                                            <p class="">QuEST quantum random number generator (QRNG) exploits pure randomness based on measuring the arrival time of single photons. This method utilizes inherently random quantum mechanical processes whose fundamentally unpredictable nature. Photon temporal waveforms are shaped using electro-optical modulator (EOM) to provide arbitrary probability distributions. QuEST QRNG is implemented on monolithic integrated photonics chip including lithium niobate PPLN waveguide, EOM, and beamsplitters. Digital data is acquired by Time-to-Digital converter via Zynq FPGA.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container text-align-center">
                                    <div class="row"></div>
                                    <div ref={this.uniform} class="row " id="uniform">
                                            <div class="animated wow fadeInRight slower col-sm-12">  
                                                <h1>Uniform Distribution</h1>
                                                <p class=" mb-0">Uniform QRNs is created by switching off RF pulses. Each photon is equally likely to be detected in any bin over a period of a reference signal, thus creating high-dimensional, uniform RNs. Entropy estimation: <span class="">0.9987 per bit.</span> </p>
                                                <p class="">Randomness tests: <a href="https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-22r1a.pdf"> NIST SP 800-22 </a>  and R. G. Brown, D. Eddelbuettel, and D. Bauer Dieharder<a href="http://www.phy.duke.edu/rgb/General/dieharder.php">: &nbsp; A Random Number Test Suite</a> </p>
                                            </div>
                                    </div>
                                    <div><div class="animated wow fadeInLeft slower col-sm-12 text-align-center">
                                                <Button variant="dark"><Link to="/uniform">Uniform</Link></Button>
                                            </div></div>
                                </div>
                                <div class="container text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div ref={this.normal} class="row " id="normal">
                                            <div class="animated wow fadeInRight slower col-sm-12">
                                                <h1>Normal Distribution</h1>
                                                <p class=" mb-0">Normal QRNs is created from shaping photon temporal profile into Gaussian distribution by manipulating RF pulses.Entropy estimation: <span>0.877 per bit.</span>Randomness tests: NIST SP 800-22 after convert the generated Gaussian-distributed QRNs to uniform random numbers via the inverse Box–Muller transformation </p>                                
                                            </div>
                                    </div>
                                    <div>
                                    <div class=" animated wow fadeInLeft slower col-sm-12">
                                                <Button variant="dark"><Link to="/normal">Normal</Link></Button>
                                    </div>
                                    </div>
                                </div>
                                <div class="container width-height-100vw-100vh text-align-center">
                                    <div class="row margin-100-100"></div>
                                    <div ref={this.arbitrary} class="row " id="arbitrary">
                                            <div class="animated wow fadeInRight slower col-sm-12">
                                                <h1>Arbitrary Distribution</h1>
                                                <p class=" mb-0">While certain non-uniform random numbers can be numerically constructed from uniform ones, the procedures are usually time-consuming and computationally complicated, while also prone to adversary interference. For example, random variate generation of non-uniform distributions relies on precise information of hazard rate, density,cumulative distribution function, distribution mode, inverse function, etc. Moreover, for each distribution, a specific algorithm needs to be developed and optimized individually. In light of this challenge, QuEST lab provides the first and only QRNG with the capability of directly generating user-defined probability distribution genuine RNs.  </p>                                
                                            </div>
                                    </div>
                                    <div>
                                    <div class=" animated wow fadeInLeft slower col-sm-12">
                                                <Button variant="dark"><Link to="/arbitrary">Arbitrary</Link></Button>
                                            </div>
                                    </div>
                                    <div class="row margin-top">
                                        <div class="col-sm-3"></div>
                                        <h2 class="text-align-center">Send an email with your specifications!</h2>
                                    </div>
                                    <div class="row margin-top">
                                        <div class="col-sm-3"></div>
                                        <form method="post" class="form-inline d-flex" action="mailto:schoud2@stevens.edu">
                                            <textarea rows="3" cols="50" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="textname" placeholder="Your text"></textarea>
                                            <a href="mailto:lnguyen1@stevens.edu"><button type="submit" class="btn btn-primary mx-auto">Send</button></a>
                                        </form>
                                    </div>
                                </div>
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
