import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as Logo } from "../assets/images/lcx-logo.svg";

export default class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }

  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          bg="white"
          variant="light"
          style={{ padding: "1%" }}
        >
          <Navbar.Brand href="/">
            <p
              className="h2"
              style={{ fontSize: "3rem", fontFamily: "Times New Roman" }}
            >
              <Link className="link-text1" to="/lcx-project">
                LCX
              </Link>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav className="justify-content-end">
              <Navbar.Brand>
                <Link className="link-text" to="/lcx-project">
                  Home
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link className="link-text" to="/about">
                  About
                </Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link className="link-text" to="/contact">
                  Contact Us
                </Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
