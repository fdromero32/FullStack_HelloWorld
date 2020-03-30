import React, { Component } from "react";
// add imports for Reactstrap components
import { Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import "./styles.css";

class HelloWorld extends Component {
  render() {
    return (
      <Router>
        <>
          <h1> Hello World! </h1>
          <Nav className="nav-bar">
            <NavItem>
              <NavLink to="/home" tag={Link}> Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={Link}> About Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/more" tag={Link}> Learn More </NavLink>
            </NavItem>
          </Nav>
          <Route path="/home" exact component={ Home } />
          <Route path="/about" exact component={ AboutUs } />
          <Route path="/more" exact component={ LearnMore } />
        </>
      </Router>
    );
  }
}

export default HelloWorld;
