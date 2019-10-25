import React,{Component} from 'react';
import {Button,Card,Row,Col,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
class Dashboard extends Component{
    constructor(){
        super()
    }
render(){
    let body;
        body = (
            <section>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={true}>
                            <Card classname="box-shadow" style={{ width: '18rem' }}>    
                                <Card.Body>
                                    <Card.Title>Generate Uniformaly Distributed</Card.Title>
                                    <Card.Text>
                                    Download the huge file of uniformaly distributed random numbers stream (in binary form) file
                                    from the quatum process
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={true}>
                            <Card classname="box-shadow" style={{ width: '18rem' }}>    
                                    <Card.Body>
                                        <Card.Title>Generate Normally Distributed</Card.Title>
                                        <Card.Text>
                                        Download the huge file of normally distributed random numbers stream (in binary form) file
                                        from the quatum process
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={true}>
                            <Card classname="box-shadow" style={{ width: '18rem' }}>    
                                    <Card.Body>
                                        <Card.Title>Correlated QRNG</Card.Title>
                                        <Card.Text>
                                        Download the Correlated QRNG with with correlated parameter
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col md={true}>
                            <Card classname="box-shadow" style={{ width: '18rem' }}>    
                                        <Card.Body>
                                            <Card.Title>Download Our App</Card.Title>
                                            <Card.Text>
                                            Download the QRNG App and feel proud of being a Stevenite
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    return body;
}
}

export default Dashboard;
