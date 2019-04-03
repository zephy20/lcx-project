import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class LCX_Exchange extends Component {
  render() {
    return (
      <Fade>
        <div className="row">
          <div className="col-md-12">
            <p className="h4">LCX Exchange</p>
            <br />
            <p className="h5">
              A stable, scalable, and secure professional trading platform for
              utility and security tokens.
            </p>
            <p className="lead">
              LCX is building a sophisticated trading platform for security
              tokens and cryptoassets. LCX is designed to satisfy the strict
              requirements of institutional investors: custody, compliance,
              stability, transparency and auditability.
            </p>
            <br />
            <p className="lead">
              The LCX Trading Platform will be built on scalable infrastructure,
              matching engine and a secure backend infrastructure. LCX’s
              platform will offer world-class stability and service quality
              tailored to the needs of professional investors. It will
              incorporate the LCX custody solution, analytical tools and a
              variety of reporting capabilities. The trading interface will be
              available in English, German and Chinese simplified. Additional
              languages will be rolled-out over time.
            </p>
            <br />
            <p className="lead">
              The LCX Trading Platform will be rolled out in several phases,
              first listing a variety of cryptoassets and at a later point of
              time listing security tokens. The listing of security tokens is in
              accordance to the international Financial Market regulations and
              will be launched after final approvals.
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}
