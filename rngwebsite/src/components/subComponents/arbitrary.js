import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'
import NavBar from './NavBar';
// import Modal from './modal'


/* 

*/
class Arbitrary extends Component{
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
            <section id="Arbitrary">
                <NavBar/>
                <div class="container margin-top-100">
                <div class="row">
                            <div class="font-size-x-large">
                                <h4 class="">Arbitrary Distribution</h4>
                                <div class="featured-text text-center text-lg-left">
                                <p class="mb-0">Please send your detailed requirements of the probability distribution to us. We will customize our system and provide pure QRNs accordingly. Thank you for your interest. Contact: Lac Nguyen lnguyen1@stevens.edu</p>
                                </div>
                            </div>
                    </div>
                    <div class="row mb-5"></div>
                    <div class="row no-gutters">
                            <div class="text-center h-100 project">
                                        <div class="container">
                                            <div class="row">
                                            <div class="row margin-top">
                                                <h2 class="mb-5">Send an email with your specifications!</h2>
                                            </div>
                                            <div class="row margin-top">
                                                <form method="post" class="form-inline d-flex" action="mailto:lngyen1@stevens.edu">
                                                    <div class="container">
                                                        <div class="row">
                                                        <textarea rows="10" cols="100" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="textname" placeholder="Your text"></textarea>
                                                        </div>
                                                        <div class="row margin-top">
                                                        <a href="mailto:lnguyen1@stevens.edu"><button type="submit" class="btn btn-primary mx-auto">Send</button></a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        </div>
                </div>
                <footer class="bg-black small text-center text-white-50 margin-top">
                    <div class="container">
                    Copyright &copy; Quest Stevens EDU 2019
                    </div>
                </footer>
            </section>
        )
    return body;
}
}

export default Arbitrary;
