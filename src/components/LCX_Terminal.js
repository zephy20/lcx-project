import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faChartPie,
  faChartLine,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
import data from "../components/jsonData.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import terminal_3 from "../assets/images/terminal_3.jpg";

export default class LCX_Terminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    this.setState({ data });
  }
  render() {
    console.log(this.state);
    return (
      <Fade>
        <div className="row">
          <div className="col-md-12">
            <p className="h4">LCX Terminal</p>
            <br />
            <p className="h5">
              The LCX Terminal is an advanced crypto assets autotrading,
              portfolio management and analytics platform with API integration
              of major exchanges.
            </p>
            <br />
            <div
              className="row"
              style={{ marginTop: "2%", justifyContent: "center" }}
            >
              <p className="h2">
                Supports your favorite crypto exchanges and wallets
              </p>
              <Jumbotron bg="light" fluid style={{ background: "none" }}>
                <Container>
                  <div className="row">
                    {this.state.data &&
                      this.state.data.wallets.map((item, id) => (
                        <div key={id} className="col-md-3 col-lg-3 col-xs-2">
                          <Fade left>
                            <Image src={item.wallet} fluid />
                          </Fade>
                        </div>
                      ))}
                  </div>
                </Container>
              </Jumbotron>
            </div>
            <div className="vault-card">
              <div className="row" style={{ marginTop: "2%" }}>
                <div className="col-md-5" style={{ textAlign: "left" }}>
                  <Card bg="white" style={{ border: "none" }}>
                    <Card.Body>
                      <Card.Text>
                        <div
                          className="row"
                          style={{ alignItems: "center", padding: "10px" }}
                        >
                          <div className="col-1">
                            <FontAwesomeIcon icon={faExchangeAlt} size="lg" />
                          </div>
                          <div className="col-11">
                            <p className="h6">Manage multiple exchanges</p>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ alignItems: "center", padding: "10px" }}
                        >
                          <div className="col-1">
                            <FontAwesomeIcon icon={faChartPie} size="lg" />
                          </div>
                          <div className="col-11">
                            <p className="h6">
                              Deep Analytics and audit reporting
                            </p>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ alignItems: "center", padding: "10px" }}
                        >
                          <div className="col-1">
                            <FontAwesomeIcon icon={faChartLine} size="lg" />
                          </div>
                          <div className="col-11">
                            <p className="h6">
                              Real-time profit/loss statement
                            </p>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{ alignItems: "center", padding: "10px" }}
                        >
                          <div className="col-1">
                            <FontAwesomeIcon icon={faRobot} size="lg" />
                          </div>
                          <div className="col-11">
                            <p className="h6">Auto trading</p>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-7 col-xs-12">
                  <Image src={terminal_3} fluid />
                </div>
              </div>
              <br />
              <p className="lead">
                The LCX Terminal aims to be the one trading desk that serves all
                the cryptoasset investment and trading needs of financial
                institutions.
              </p>
              <br />
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
