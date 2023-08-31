import React, {Component} from "react";
import {Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink,} from "reactstrap";
import {Link} from "react-router-dom";

// Import Logo
import logodark from "../../assets/images/logo.png";
import logolight from "../../assets/images/logo.png";


import ScrollspyNav from "./Scrollspy";
import FeatherIcon from "feather-icons-react";

class NavbarPage extends Component {
    // render() {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
        };
    }

    render() {
        let targetId = this.props.navItems.map((item) => {
            return item.idnm;
        });
        return (
            <React.Fragment>
                <Navbar
                    expand="lg"
                    fixed={this.props.top === true ? "top" : ""}
                    className={this.props.navClass + " fixed-top navbar-custom sticky sticky-dark align-items-center"}
                    id="navbar"
                >
                    <Container>
                        {/* LOGO */}
                        <Link className="logo mr-3" to="/">
                            {this.props.imglight === true ? (
                                <img src={logolight} alt="" height="26"/>
                            ) : (
                                <img src={logodark} alt="" height="26"/>
                            )}
                        </Link>
                        <NavbarToggler onClick={this.toggle}>
                            <span className="ti-menu"></span>
                        </NavbarToggler>
                        <Collapse
                            id="navbarCollapse"
                            isOpen={this.state.isOpenMenu}
                            className="navbar-collapse"
                        >
                            <ScrollspyNav
                                scrollTargetIds={targetId}
                                scrollDuration="800"
                                headerBackground="true"
                                activeNavClass="active"
                                className="navbar-collapse"
                            >
                                <Nav className="navbar-nav navbar-center" id="navbar-navlist">
                                    {this.props.navItems.map((item, key) => (
                                        <NavItem
                                            key={key}
                                            className={item.navheading === "Home" ? "active" : ""}
                                        >
                                            <NavLink
                                                className={item.navheading === "Home" ? "active" : ""}
                                                href={"#" + item.idnm}
                                            >
                                                {item.navheading}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                                <div className="badge f-14 bg-soft-dark text-muted mt-2">
                                   <span
                                       className="text-dark">
                                       <FeatherIcon
                                           className="icon mr-1"
                                           icon="phone"/>
                                    </span> (+91) 88007 79618
                                </div>
                            </ScrollspyNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

// }
export default NavbarPage;