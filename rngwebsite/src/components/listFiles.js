import React,{Component} from 'react';
import {Button,Card,Row,Col,Container,InputGroup,FormControl,Image,ListGroup} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class ListFiles extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="/">Quantum Generation</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="/about">About</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <section style={{margin:'100px'}}>
                </section>
                <section>
                <ListGroup>
                <ListGroup.Item>File Dated on 12/02/2019</ListGroup.Item>
                <ListGroup.Item>File Dated on 22/02/2019</ListGroup.Item>
                <ListGroup.Item>File Dated on 03/02/2019</ListGroup.Item>
                <ListGroup.Item>File Dated on 12/02/2019</ListGroup.Item>
                </ListGroup>
                </section>
            </Container>
        )
    }
}
export default ListFiles