import React,{Component} from 'react';
import {Button,Card,Row,Col,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
class Team extends Component{
    constructor(){
        super()
    }
render(){
    let body;
        body = (
            <section>
      <link href="css/grayscale.css" rel="stylesheet"/>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        </div>
                    </div>
                    <div class="row margin-top-100">
                    <div class="col-sm-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                            <h4>Jack Zhou</h4>
                            <p class="text-muted">Project Manager/Developer</p>
                            <ul class="list-inline social-buttons">
                            <li class="list-inline-item">
                                <a href="https://twitter.com/#" target="_blank">
                                <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/#/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>

                            </ul>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                            <h4>Jack Zhou</h4>
                            <p class="text-muted">Project Manager/Developer</p>
                            <ul class="list-inline social-buttons">
                            <li class="list-inline-item">
                                <a href="https://twitter.com/#" target="_blank">
                                <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/#/" target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>

                            </ul>
                        </div>
                            </div>
                            </div>

                        <div class="row">
                            <div class="col-sm-4">
                                <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                                <h4>Jack Zhou</h4>
                                <p class="text-muted">Project Manager/Developer</p>
                                <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="https://twitter.com/#" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                
                                <li class="list-inline-item">
                                    <a href="https://www.linkedin.com/in/#/" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>

                                </ul>
                            </div>
                            </div>
                            
                            <div class="col-sm-4">
                                <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                                <h4>Jack Zhou</h4>
                                <p class="text-muted">Project Manager/Developer</p>
                                <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="https://twitter.com/#" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                
                                <li class="list-inline-item">
                                    <a href="https://www.linkedin.com/in/#/" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>

                                </ul>
                            </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="team-member">
                                <img class="mx-auto rounded-circle" src="img/kakashi.jpeg" alt="picture" />
                                <h4>Jack Zhou</h4>
                                <p class="text-muted">Project Manager/Developer</p>
                                <ul class="list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="https://twitter.com/#" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                
                                <li class="list-inline-item">
                                    <a href="https://www.linkedin.com/in/#/" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>

                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    return body;
}
}

export default Team;
