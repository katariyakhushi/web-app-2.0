import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";





export default class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {
                    id: 1,
                    name: "Sandeep Bhimawad",
                    designation: "Co-founder"
                },
                {
                    id: 2,
                    name: "Rahul Nahar",
                    designation: "Co-founder"
                },
                {
                    id: 3,
                    name: "Yogesh Patidar",
                    designation: "Co-founder"
                },
                {
                    id: 4,
                    name: "Abhisek Thakur",
                    designation: "Accountant"
                },
                {
                    id: 5,
                    name: "Yogendra Bhimawad",
                    designation: "Customer Representative"
                },
                {
                    id: 6,
                    name: "Arun Gothi",
                    designation: "Stock Manager"
                },
                {
                    id: 7,
                    name: "Rahul Patidar",
                    designation: "Field officer"
                },
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="gallery">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-7">
                                <div className="text-center mb-5">
                                    <h2 className="">Achievements</h2>
                                    <p className="text-mutsuccessed">
                                    "One Step Toward Heights of Accomplishments"
                                    </p>
                                </div>
                            </div>
                        </Row>
                        
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
