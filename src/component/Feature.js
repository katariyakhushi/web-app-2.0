import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from 'classnames';

// Import Image
import Img2 from "../assets/images/features/img-2.webp";
import Img3 from "../assets/images/features/img-3.jpeg";
import Img1 from "../assets/images/features/img-1.webp";

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "v-pills-work",
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="text-center mb-5">
                                    <h2 className="">What We Do....</h2>
                                    <p className="text-muted">"Our aim is to empower cultivators,
                                        offering comprehensive assistance across all aspects of agriculture."
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <div className="features-content">
                            <Row className="align-items-center">
                                <Col lg={6} className="order-2 order-lg-1">
                                    <TabContent id="v-pills-tabContent" activeTab={this.state.activeTab}>
                                        <TabPane tabId="v-pills-work" className="fade show">
                                            <img src={Img1} alt="" className="img-fluid d-block mx-auto" height="600" width="500"/>
                                        </TabPane>
                                        <TabPane tabId="v-pills-marketing" className="fade show">
                                            <img src={Img3} alt=""  className="img-fluid d-block mx-auto" height="600" width="400"/>
                                        </TabPane>
                                        <TabPane tabId="v-pills-feedback" className="fade show">
                                            <img src={Img2} alt="" className="img-fluid d-block mx-auto" />
                                        </TabPane>
                                    </TabContent>
                                </Col>
                                <Col lg={5} className="offset-lg-1 order-1 order-lg-2">
                                    <Nav className="flex-column" pills id="v-pills-tab" role="tablist"
                                         aria-orientation="vertical">
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === 'v-pills-work'}, "rounded")}
                                                     onClick={() => {
                                                         this.toggleTab('v-pills-work');
                                                     }} id="v-pills-work-tab">
                                                <h4 className="text-dark f-18">Revolutionizing Farming</h4>
                                                <p className="text-muted f-15">A Step Towards Empowering Farmers with 'Kisano Ka Apna Bazar.</p>
                                                <p className="text-primary mb-0 read-more">More Information<span
                                                    className="right-icon ml-2">&#8594;</span></p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === 'v-pills-marketing'}, "rounded")}
                                                     onClick={() => {
                                                         this.toggleTab('v-pills-marketing');
                                                     }} id="v-pills-work-tab">
                                                <h4 className="text-dark f-18">Directing Agricultural Progress</h4>
                                                <p className="text-muted f-15">Harnessing the Power of 'Kisano Ka Apna Bazar' for Enhanced Crop Yields.</p>
                                                <p className="text-primary mb-0 read-more">More Information<span
                                                    className="right-icon ml-2">&#8594;</span></p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#"
                                                     className={classnames({active: this.state.activeTab === 'v-pills-feedback'}, "rounded")}
                                                     onClick={() => {
                                                         this.toggleTab('v-pills-feedback');
                                                     }} id="v-pills-work-tab">
                                                <h4 className="text-dark f-18">Path to Agricultural Prosperity</h4>
                                                <p className="text-muted f-15">Elevating Crop Production and Ensuring Quality with 'Kisano Ka Apna Bazar'.</p>
                                                <p className="text-primary mb-0 read-more">More Information<span
                                                    className="right-icon ml-2">&#8594;</span></p>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
