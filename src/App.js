import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./components/ParticleComponent";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
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
            <Route exact path="/lcx-project" component={Home} />

            <Route exact path="/lcx-project/about" component={About} />
            <Route path="/lcx-project/contact" component={Contact} />

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
