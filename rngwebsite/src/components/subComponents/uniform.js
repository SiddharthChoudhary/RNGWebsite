import React,{Component} from 'react';
import {Button,Modal,InputGroup,FormControl, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../../index.css'
import NavBar from  './NavBar'


class Uniform extends Component{
    constructor(){
        super()
        this.state={
            show:false,
            min:'',
            max:'',
            amount:'',
            error:false,
            response:''
        }
    }

    handleMinChange=(e)=>{
        if(e.target.value>100 || e.target.value < 0){
            this.setState({
                error:true
            });
            return;
        }else{
            this.setState({
                error:false
            })
        }
        this.setState({
            min:e.target.value
        })
    }
    handleMaxChange=(e)=>{
        if(e.target.value>100 || e.target.value < 0 || Number(e.target.value) < Number(this.state.min)){
            this.setState({
                error:true
            });
            return;
        }else{
            this.setState({
                error:false
            })
        }
        this.setState({
            max:e.target.value
        })
    }
    handleAmountChange=(e)=>{
        if(e.target.value>100 || e.target.value < 0){
            this.setState({
                error:true
            });
            return;
        }else{
            this.setState({
                error:false
            })
        }
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
    window.scrollTo(0,0)
    let body;
        body = (
            <section id="Uniform">
                <NavBar/>
                <div class="container margin-top-100">
                <div class="row justify-content-center no-gutters">
                   
                </div>
                <div class="row margin-top mb-5 justify-content-center">
                
                </div>
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="container width-height-100vw-100vh">
                                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                                    <div class="col-xl-4 col-lg-5">
                                        <div class="featured-text text-center text-lg-left">
                                        <h4>API</h4> <p id="tryNow" class="animated bounce"><Link onClick={()=>this.showModal(this.state.show)}>Try Now</Link></p>
                                        <p class="mb-0">http://quest.phy.stevens.edu:5050/main</p>
                                        <Modal show={this.state.show} onHide={()=>this.hideModal(this.state.show)}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Select Input</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        {this.state.error ?<Alert variant='danger'>Input should be valid and limited to 100 and Maximum should not be less than minimum</Alert>:''}
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Min</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                        placeholder="0"
                                        onChange={this.handleMinChange}
                                        />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Max</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                        placeholder="0"
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
                                    <span class="">&nbsp; lower &nbsp; </span> is the minimum range (cannot go less than 0)
                                </div>
                                <div class="row">
                                    where <span class="">&nbsp; higher &nbsp; </span> is the maximum range
                                </div>
                                <div class="row">
                                    where <span class="">&nbsp; amount &nbsp; </span> is the number of random numbers you want (cannot go less than 500)
                                </div>
                                <div class="row margin-top"></div>
                                <div class="row margin-top">
                                    <h5>For example: </h5>
                                    <p class=""> http://quest.phy.stevens.edu:5050/main?lower=0&higher=10&amount=10</p>
                                </div>
                        </div>

                        </div>
                        </div>
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

export default Uniform;
