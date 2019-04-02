import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./components/ParticleComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ParticleComponent />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <NavBar />
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />
            {/* <Route path="/product" component={Products} />
            <Route path="/media" component={Media} />
            <Route path="/sessions" component={Sessions} />
            <Route path="/contact" component={contact} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
