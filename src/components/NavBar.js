import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "react-bootstrap/Nav";

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
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="white" variant="light" style={{padding:"1% 25%"}}  >
        <Navbar.Brand href="/"><p className="h2">LCX</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link> */}
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Brand>
            <Link className="link-text" to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link className="link-text" to="/about">About</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link className="link-text" to="/product">Products</Link>
          </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
