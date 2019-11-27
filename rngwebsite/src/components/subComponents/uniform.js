import React,{Component} from 'react';
import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../../index.css'
// import Modal from './modal'


/* 

*/
class Uniform extends Component{
    constructor(){
        super()
        this.state={
            show:false,
            min:'',
            max:'',
            amount:'',
            response:''
        }
    }
    validate(){
        // fetch('http://35.192.39.81:5050/main?lower=0&higher='+Number.parseInt(this.state.max)+'&amount='+Number.parseInt(this.state.amount))
        //         .then((response) => {return response.text()})
        //         .then((responseJson) => {
        //             // console.log("Response is ",JSON.parse(responseJson));
        //             this.setState({
        //                response: responseJson.finalrandomarray ? JSON.parse(responseJson.finalrandomarray) : {}
        //             });
        //             // this.setState({
        //             //     response: responseJson.finalrandomarray
        //             // })
        //         })
        //         .catch((error)=>{
        //         alert(error)
        //     })
    }
    handleMinChange=(e)=>{
        this.setState({
            min:e.target.value
        })
    }
    handleMaxChange=(e)=>{
        this.setState({
            max:e.target.value
        })
    }
    handleAmountChange=(e)=>{
        this.setState({
            amount:e.target.value
        })
    }
    hideModal=()=>{
        this.setState({
            show:false
        });
    }
    showModal=()=>{
        this.setState({
            show:true
        })
    }
    render(){
    let body;
        body = (
            <section>
                <link href="css/grayscale.css" rel="stylesheet"/>
                <div class="container">
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6">
                    <img class="img-fluid" src="img/demo-image-02.jpg" alt=""/>
                    </div>
                    <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">Uniform Distribution</h4>
                            <p class="mb-0 text-white-50">A description explaining that how the api works and what is Uniform Distribution all about</p>
                            <hr class="d-none d-lg-block mb-0 mr-0"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row margin-top mb-5 justify-content-center">
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
                        <h4>API</h4> <p><Link onClick={()=>this.showModal(this.state.show)}>TryNow</Link></p>
                        <p class="text-black-50 mb-0">http://quest.phy.stevens.edu:5050/main</p>
                        <Modal show={this.state.show} onHide={()=>this.hideModal(this.state.show)}>
                        <Modal.Header closeButton>
                        <Modal.Title>Select Input</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>Min</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Minimum"
                        onChange={this.handleMinChange}
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>Max</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Maximum"
                        onChange={this.handleMaxChange}
                        />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>Amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Amount"
                        onChange={this.handleAmountChange}
                        />
                        </InputGroup>
                        <a href={"http://35.192.39.81:5050/main?lower=0"+this.state.min+"&higher="+ this.state.max+"&amount="+this.state.amount}><Button>Try It</Button></a>
                        <div>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                        </Modal> 
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

export default Uniform;
