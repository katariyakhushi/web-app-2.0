import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

// Import Background Image
import store1 from "../assets/images/stores/store-shajapur.jpeg";
import store2 from "../assets/images/stores/store-bercha.jpeg";
import store3 from "../assets/images/stores/store-badoda.jpeg";

import Icon1 from "../assets/images/services-icon/icon-1.png";
import {Link} from "react-router-dom";

export default class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="text-center mb-5">
                                    <h2 className="">Our Stores</h2>
                                    <p className="text-muted">Kisano Ka Apna Bazar has stores in below three locations</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-stretch">
                            <Col lg={4}>
                                <div className="card service-box text-center p-2">
                                    <img src={store2} alt="" className="img-fluid d-block"/>
                                    <br/>
                                    <h4 className="service-title mt-4 mb-3 f-18">Nr. SBI bank, Berchha</h4>
                                    <Link to="#" className="read-more">Locate Me<span
                                        className="right-icon ml-2">&#8594;</span></Link>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card service-box text-center p-2">
                                    <img src={store1} alt="" className="img-fluid d-block"/>
                                    <br/>
                                    <h4 className="service-title mt-4 mb-3 f-18">Tanki Chouraha, Shajapur</h4>
                                    <Link to="#" className="read-more">Locate Me<span
                                        className="right-icon ml-2">&#8594;</span></Link>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="card service-box text-center p-2">
                                    <img src={store3} alt="" className="img-fluid d-block"/>
                                    <br/>
                                    <h4 className="service-title mt-4 mb-3 f-18">Narsee Road, Badoda</h4>
                                    <Link to="#" className="read-more">Locate Me<span
                                        className="right-icon ml-2">&#8594;</span></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
