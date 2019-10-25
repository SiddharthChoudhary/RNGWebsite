import React,{Component} from 'react';
import {Button,Card,Row,Col,Container,InputGroup,FormControl,Image} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
class Uniform extends Component{
    constructor(){
        super()
    }
render(){
    let body;
        body = (
            <Container>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Quantum Generation</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a><Link to="/listFiles">List Files</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section style={{margin:'100px'}}>
  </section>
  <section>
    <Row>
        <Col md={4}>
            <p>API for uniform is: <a>http://quest.stevens.edu/main</a></p>
            <Button variant="secondary">Click for the API</Button>
        </Col>
        <Col md={2}>
        </Col>
        <Col md={4}>
            <Image src="img/demo-image-01.jpg"></Image>
        </Col>
    </Row>
  </section>
    </Container>
        )
    return body;
}
}

export default Uniform;
