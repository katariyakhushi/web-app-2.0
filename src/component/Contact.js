import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";
import ContactImg from "../assets/images/contact-img.jpeg";
import FeatherIcon from "feather-icons-react";
import emailjs from "emailjs-com";

const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        lastname: "",
        email: "",
        comments: "",
    });

    const [sendMail, setSendMail] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("formSTate", formState)

        emailjs
            .send(
                "service_t3x0ivb",
                "template_44jwwbf",
                formState,
                "V__ztZ1qYcPVY-uYy"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result);
                    setSendMail(true)
                    // Handle success, e.g., show a success message to the user
                },
                (error) => {
                    console.error("Email sending failed:", error);
                    setSendMail(false)
                    setIsLoaded(false)
                    // Handle error, e.g., show an error message to the user
                }
            ).catch(e => {
            console.log("Error", e)
        });

        // Clear the form fields
        setFormState({
            name: "",
            lastname: "",
            email: "",
            comments: "",
        });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <React.Fragment>
            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center mb-5">
                                <h2 className="">Contact Us</h2>
                                <p className="text-muted">
                                    Kisano Ka Apna Bazar has three stores in Madhya Pradesh
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={6} md={10}>
                            <div className="mb-5 mb-lg-0">
                                <div className="text-center">
                                    <img
                                        src={ContactImg}
                                        alt=""
                                        className="img-fluid d-block w-75 mx-auto"
                                    />
                                    <h4 className="mt-4">For Enquiries ?</h4>
                                    <p className="text-muted mb-4">
                                        Reach out to our team on below details for enquiries or
                                        product updates.
                                    </p>
                                    <Row>
                                        <Col lg={12}>
                                            <Link to="#">
                                                <div className="badge f-14 bg-soft-dark text-muted">
                                                  <span className="text-dark">
                                                    <FeatherIcon
                                                        className="icon mr-1"
                                                        icon="mail"
                                                    />
                                                    Email:
                                                  </span>{" "}
                                                    kisanokaapnabazaar100@gmail.com
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="badge f-14 bg-soft-dark text-muted mt-2">
                                                      <span className="text-dark">
                                                        <FeatherIcon
                                                            className="icon mr-1"
                                                            icon="phone"
                                                        />
                                                        Toll Free Number:
                                                      </span>{" "}
                                                    (+91) 88007 79618
                                                </div>
                                            </Link>
                                            <Link to="#">
                                                <div className="badge f-14 bg-soft-dark text-muted mt-2">
                                                      <span className="text-dark mr-1">
                                                        <FeatherIcon className="icon mr-1" icon="message-circle"/>
                                                        Whatsapp Number:
                                                      </span>{" "}
                                                    (+91) 96444 09115
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="offset-lg-1">
                            <h4 className="line-height-1_4 mb-4">Get in Touch</h4>
                            <div className="custom-form mt-4 mt-lg-0">
                                <div id="message"></div>
                                <Form name="contact-form" id="contact-form" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className="app-label">
                                                <Label for="name" className="text-muted">
                                                    First Name
                                                </Label>
                                                <Input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter. . ."
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup className="app-label">
                                                <Label for="lastname" className="text-muted">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    name="lastname"
                                                    id="lastname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter. . ."
                                                    value={formState.lastname}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup className="app-label">
                                                <Label for="email" className="text-muted">
                                                    Your Email
                                                </Label>
                                                <Input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email. . ."
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup className="app-label">
                                                <Label for="comments" className="text-muted">
                                                    Type Message
                                                </Label>
                                                <Input
                                                    name="comments"
                                                    id="comments"
                                                    type="textarea"
                                                    rows="4"
                                                    className="form-control"
                                                    placeholder="Message. . ."
                                                    value={formState.comments}
                                                    onChange={handleChange}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Button
                                                color="primary"
                                                id="submit"
                                                name="send"
                                                type="submit"
                                                className="btn btn-success"
                                            >
                                                Send Message
                                            </Button>
                                            <div id="simple-msg"></div>
                                        </Col>
                                    </Row>
                                </Form>

                                {
                                    (sendMail) && <div className="mt-5">
                                        <FeatherIcon
                                            className="icon mr-1"
                                            icon="check-circle"/>
                                        <span className="text-success">Thanks for reaching out! Our Customer team will contact you soon.</span>
                                    </div>
                                }
                                {
                                    !isLoaded && <div className="mt-5">
                                        <FeatherIcon
                                            className="icon mr-1"
                                            icon="alert-circle"/>
                                        <span className="text-danger">Oops! Error Sending email, please connect via call.</span>
                                    </div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Contact;
