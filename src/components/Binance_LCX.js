import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Image from "react-bootstrap/Image";
import binanceLCX from "../assets/images/binanceLCX.jpg";

export default class Binance_LCX extends Component {
  render() {
    return (
      <Fade>
        <div className="row">
          <div className="col-md-12">
            <p className="h4">Binance LCX</p>
            <br />
            <p className="h5">Joint venture</p>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <Image src={binanceLCX} fluid />
              </div>
              <div className="col-md-6 col-xs-12">
                <p className="lead">
                  Binance LCX is a joint venture between Binance and LCX, that
                  will launch a fiat-to-crypto exchange in Liechtenstein. The
                  experienced team at Binance will provide and maintain the
                  technology platform, while Binance LCX manages customer
                  support, legal requirements, due diligence, KYC, AML and
                  government communication. Binance LCX plans to build up a team
                  of 10–15 people for its Liechtenstein office and will
                  immediately start the hiring process. The exchange will offer
                  trading between Swiss Francs (CHF) and Euros (EUR) against
                  major cryptocurrencies pairs, and add more trading pairs
                  overtime subject to regulatory approval.
                </p>
              </div>
            </div>

            <br />
          </div>
        </div>
      </Fade>
    );
  }
}
