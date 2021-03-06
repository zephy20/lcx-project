import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataCard from "./Card";
import Collapse from "react-bootstrap/Collapse";
import SimpleLineIcon from "react-simple-line-icons";
import Tab from "react-bootstrap/Tab";
import LCX_Exchange from "./LCX_Exchange";
import LCX_Terminal from "./LCX_Terminal";
import LCX_Vault from "./LCX_Vault";
import Binance_LCX from "./Binance_LCX";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import lcx_exchange from "../assets/images/lcx_exchange.png";
import lcx_vault from "../assets/images/lcx_vault.png";
import lcx_terminal from "../assets/images/lcx_terminal.png";
import binanceLCX_logo from "../assets/images/binanceLCX_logo.png";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.introRef = React.createRef();
    this.productRef = React.createRef();
    this.state = {
      products: [
        {
          img: lcx_exchange,
          description:
            "Platform for security tokens and other cryptoassets trading."
        },
        {
          img: lcx_vault,
          description:
            "Institutional-grade crypto asset vault using dedicated hardware security."
        },
        {
          img: lcx_terminal,
          description:
            "Trading terminal with auto trading strategies/bots supporting multiple crypto exchanges."
        },
        {
          img: binanceLCX_logo,
          description:
            "A fiat-to-crypto exchange as a joint venture between Binance and LCX."
        }
      ],
      open: false,
      tab: false
    };
  }

  handleOnClick = event => {
    //.current is verification that your element has rendered
    if (this.introRef.current) {
      this.introRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  };

  handleTabChange = id => {
    this.setState({ currentTab: id, tab: true });

    setTimeout(() => {
      if (this.productRef.current) {
        this.productRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    }, 0);
  };

  handleProductClick = event => {};

  render() {
    const { open } = this.state;
    return (
      <div>
        <div>
          <div className="home-banner">
            <div className="banner-section">
              <div className="banner-text">
                <p className="h2">Liechtenstein Cryptoassets Exchange</p>
              </div>
            </div>
          </div>
          <div
            className="banner-text"
            style={{ color: "black", padding: "6%" }}
          >
            <Slide left>
              <p className="h1">An exchange made for professional investors</p>
            </Slide>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0% 0 6% 0"
            }}
          >
            <SimpleLineIcon
              name="arrow-down"
              size="Large"
              onClick={this.handleOnClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="intro-container">
          <div className="row">
            <div className="col-md-12">
              <p className="h2">Powering Professional Crypto Finance</p>
              <p className="lead">
                LCX, the Liechtenstein Cryptoassets Exchange, is a blockchain
                ecosystem for professional investors. LCX will provide crypto
                custody service called LCX Vault, a crypto trading desk called
                LCX Terminal, an advanced trading platform for security tokens
                and other cryptoassets called LCX Exchange, and an international
                fiat-to-crypto exchange called Binance LCX, which is a joint
                venture with Binance.
              </p>
            </div>
          </div>
        </div>
        <div className="intro-container" style={{ padding: "0px" }}>
          <div className="row">
            <div className="col-md-12">
              <p className="h2">Our Products</p>
            </div>
          </div>
        </div>
        <div className="card-container" ref={this.introRef}>
          <div className="row">
            {this.state.products.length > 0 &&
              this.state.products.map((item, id) => (
                <div
                  onClick={this.handleTabChange.bind(this, id)}
                  key={id}
                  className="col-md-6 col-xl-3 col-xs-12"
                  style={{
                    boxShadow: "0px 2px 4px rgba(126,142,177,0.12)",
                    borderBottom:
                      this.state.currentTab === id ? "5px solid red" : "unset"
                  }}
                >
                  <Slide left>
                    <DataCard item={item} />
                  </Slide>
                </div>
              ))}
          </div>
        </div>
        {this.state.tab === true && (
          <div className="tab-container" ref={this.productRef}>
            {this.state.currentTab === 0 ? (
              <LCX_Exchange />
            ) : this.state.currentTab === 1 ? (
              <LCX_Vault />
            ) : this.state.currentTab === 2 ? (
              <LCX_Terminal />
            ) : this.state.currentTab === 3 ? (
              <Binance_LCX />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
