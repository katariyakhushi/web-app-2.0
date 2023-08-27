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
            VillagesCount: 25,
            CustomersCount: 2000,
            ProductsCount: 500,
            CompaniesCount: 45,
        };

        this.countingOrder = ["VillagesCount",  "CompaniesCount", "ProductsCount", "CustomersCount" ];
        this.intervalValues = {
            VillagesCount: 100, // 1 second
            CustomersCount: 0.5, // 0.5 seconds
            ProductsCount: 1, // 0.8 seconds
            CompaniesCount: 90, // 1.2 seconds
        };
    }

    componentDidMount() {
        this.counterIntervals = {};

        for (const counter of this.countingOrder) {
            this.counterIntervals[counter] = setInterval(() => {
                if (this.state[counter] < this.targetValues[counter]) {
                    this.setState(prevState => ({
                        [counter]: prevState[counter] + 1,
                    }));
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
        const circleProgressStyles = {
            position: "relative",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#f3f3f3",
            margin: "0 auto",
            boxShadow: "inset 0 0 0 5px #d9d9d9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "rotate(-90deg)"
        };

        const progressBarStyles = {
            position: "absolute",
            width: "100%",
            height: "100%",
            clip: "rect(0px, 50px, 100px, 0px)",
            backgroundColor: "#FFA500",
            borderRadius: "50%",
            transition: "transform 0.8s"
        };

        const progressFillStyles = {
            position: "absolute",
            width: "100%",
            height: "100%",
            clip: "rect(0px, 50px, 100px, 0px)",
            backgroundColor: "#FFA500",
            borderRadius: "50%"
        };

        const progressLabelStyles = {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#333",
            fontSize: "16px",
            fontWeight: "bold"
        };

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
