import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Import Background Image
import store1 from "../assets/images/stores/store-shajapur.jpeg";
import store2 from "../assets/images/stores/store-bercha.jpeg";
import store3 from "../assets/images/stores/store-badoda.jpeg";

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
                                    <p className="text-muted">
                                        Kisano Ka Apna Bazar has stores in below three locations
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex align-items-stretch">
                            <StoreCard
                                imgSrc={store2}
                                title="Nr. SBI bank, Berchha"
                                mapSrc="https://goo.gl/maps/TDBBSvNXtcaJvLhq6"  
                            />
                            <StoreCard
                                imgSrc={store1}
                                title="Tanki Chouraha, Shajapur"
                                mapSrc="https://goo.gl/maps/L83vR2wVbokMc4456"                             
                                 />
                            <StoreCard
                                imgSrc={store3}
                                title="Narsee Road, Boda"
                                mapSrc="https://goo.gl/maps/RQwGHJHYd3WYvAVW7"    
                                                              ></StoreCard>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

function StoreCard({ imgSrc, title, mapSrc }) {
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(!showMap);
    };

    return (
        <Col lg={4}>
            <div className="card service-box text-center p-2">
                <img src={imgSrc} alt="" className="img-fluid d-block" />
                <br />
                <h4 className="service-title mt-4 mb-3 f-18">{title}</h4>
                <a href={mapSrc} className="read-more text-success" target="_blank">
                    Locate Me<span className="right-icon ml-2">&#8594;</span>
                </a>
                {/* {showMap && (
                    <div className="map-container">
                        <iframe
                            src={mapSrc}
                            width="250" height="250" style={{ border: 0 }}
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                )} */}
            </div>
        </Col>
    );
}
