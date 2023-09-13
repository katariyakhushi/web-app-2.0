import React, {Component} from "react";
import {Button, Col, Container, Row} from "reactstrap";

import Slider from "react-slick";
import {Modal} from "react-bootstrap";
import './style.css'

export default class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: "https://www.passionateinmarketing.com/wp-content/uploads/2023/02/Untitled.jpeg",
                    name: 'Coromandel',
                    link: "https://www.coromandel.biz/",
                    desc: "Hi Company 1"
                },
                {
                    id: 2,
                    img: "data:image/jpeg;base64,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",
                    name: 'Dhanuka',
                    link: "https://www.dhanuka.com/",
                    desc: "Hi Company 2"

                },
                {
                    id: 3,
                    img: "data:image/png;base64,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",
                    name: 'Plantbiotix',
                    link: "https://www.plantbiotix.com/",
                    desc: "Hi Company 3"
                },
                {
                    id: 4,
                    img: "data:image/jpeg;base64,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",
                    name: 'UPL',
                    link: "https://www.plantbiotix.com/",
                    desc: "Hi Company 4"
                },
                {
                    id: 5,
                    img: "data:image/png;base64,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",
                    name: 'Adama',
                    link: "https://www.adama.com/en",
                    desc: "Hi Company 5"
                },
                {
                    id: 6,
                    img: "https://mma.prnewswire.com/media/331912/fmc_corporation_logo.jpg?p=facebook",
                    name: 'FMC',
                    link: "https://ag.fmc.com/in/en/products",
                    desc: "Hi Company 6"
                }
            ],
            showModal: false
        };
    }

    render() {
        const settings = {
            dots: true,
            speed: 300,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 1000,
            centerPadding: '20px',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                        centerPadding: '20px'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        centerPadding: '20px'
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        infinite: true,
                        centerPadding: '20px'
                    }
                }
            ]
        };

        const slides = this.state.items.map((item, key) => {

            return (
                <div className="item" key={key}>
                    <div className="testi-box text-center m-2">
                            <div className="mt-1 mb-3">
                            <div className="mt-1 mb-3" >
                                <img src={item.img}
                                     alt=""
                                     className="testi-icon img-fluid d-block mx-auto w-auto"
                                     onClick={()=> {
                                         this.setState({
                                             showModal: true
                                         })
                                     }}
                                />
                            </div>
                        </div>
                        <div className="test-user-info">
                            <h5 className="f-17 mt-3 mb-1">{item.name}</h5>
                        </div>
                        <Modal
                            show={this.state.showModal}
                            size="lg"
                            aria-labelledby=""
                            centered
                            backdrop={false}
                            animation={true}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="">
                                    {item.name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>Centered Modal</h4>
                                <p>
                                    {item.desc}
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => {
                                    this.setState({
                                        showModal: false
                                    })
                                }}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            );
        });

        return (
            <React.Fragment>
                <section className="section bg-light" id="companies">
                    <Container>
                        <Row className="justify-content-center" >
                            <Col lg={7}>
                                <div className="text-center mb-5" >
                                    <h2 className="">Our Partnerships</h2>
                                    <p className="text-muted">Kisano Ka Apna Bazar has partnerships with the leading companies
                                        manufacturing and supplying pesticides, insecticides and fertilizers to increase criop yields.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div
                                    id="testi-clients"
                                    className="owl-carousel owl-theme testi-content"
                                   
                                >
                                    <Slider {...settings}>
                                        {slides}
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
