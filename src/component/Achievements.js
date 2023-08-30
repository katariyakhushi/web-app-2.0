import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

export default class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VillagesCount: 0,
            CustomersCount: 0,
            ProductsCount: 0,
            CompaniesCount: 0,
        };

        this.targetValues = {
            VillagesCount: 1500,
            CustomersCount: 25000,
            ProductsCount: 2000,
            CompaniesCount: 100,
        };

        this.countingOrder = ["VillagesCount",  "CompaniesCount", "ProductsCount", "CustomersCount" ];
        this.intervalValues = {
            VillagesCount: 0.001, // 1 second
            CustomersCount: 0.1, // 0.5 seconds
            ProductsCount: 0.001, // 0.8 seconds
            CompaniesCount: 10, // 1.2 seconds
        };
    }

    componentDidMount() {
        this.counterIntervals = {};

        for (const counter of this.countingOrder) {
            this.counterIntervals[counter] = setInterval(() => {
                if (this.state[counter] < this.targetValues[counter]) {

                    if(counter === "CustomersCount") {
                        this.setState(prevState => ({
                            [counter]: prevState[counter] + 25
                        }));
                    } else {
                        this.setState(prevState => ({
                            [counter]: prevState[counter] + 1
                        }));
                    }
                }
            }, this.intervalValues[counter]);
        }
    }

    componentWillUnmount() {
        for (const interval in this.counterIntervals) {
            clearInterval(this.counterIntervals[interval]);
        }
    }

    render() {

        return (
            <section className="section bg-light" id="achievements">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center mb-5">
                                <h2 className="">Achievements</h2>
                                <p className="text-muted">
                                    "One Step Toward Heights of Accomplishments"
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {this.countingOrder.map(counter => (
                            <Col key={counter} md={3} className="d-flex flex-column" style={{
                                placeItems: "center"
                            }}>
                                <h2>
                                    {this.state[counter]}+
                                </h2>
                                <h2>
                                    {counter.replace("Count", "")}
                                </h2>
                                {/*<div style={circleProgressStyles}>*/}
                                {/*    <div*/}
                                {/*        style={{*/}
                                {/*            ...progressBarStyles,*/}
                                {/*            transform: `rotate(${(this.state[counter] / this.targetValues[counter]) * 360}deg)`*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <div style={progressFillStyles} />*/}
                                {/*    </div>*/}
                                {/*    <div style={progressLabelStyles}>*/}
                                {/*        {Math.round((this.state[counter] / this.targetValues[counter]) * 100)}%*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        );
    }
}
