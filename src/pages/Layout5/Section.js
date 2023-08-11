import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Col, Container, Form, FormGroup, Input, Row} from "reactstrap";

// Import Background Image
import hero5 from "../../assets/images/hero-5-img.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-5-bg position-relative bg-light" id="home">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="">
                                    <h1 className="hero-5-title line-height-1_4 mb-4">Create Amazing Landing Page
                                        With <span className="text-primary">Kisano Ka Apna Bazar</span></h1>
                                    <p className="text-muted mb-4 pb-3">Nemo enim ipsam voluptatem quia voluptas sit
                                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                        ratione sequinesciunt.</p>
                                    <div className="Subcribe-form">
                                        <Form className="form-inline">
                                            <FormGroup>
                                                <Input type="email" className="form-control mr-md-3" id="inputEmail2"
                                                       placeholder="Enter Your Email..."/>
                                            </FormGroup>
                                            <Link to="#" type="submit" className="btn btn-primary">Subscribe</Link>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <img src={hero5} alt="" className="hero-5-img"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
