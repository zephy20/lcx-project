import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class LCX_Vault extends Component {
  render() {
    return (
      <Fade>
        <div className="row">
          <div className="col-md-12">
            <p className="h4">LCX Vault</p>
            <br />
            <p className="h5">
              An institutional-grade crypto asset vault using dedicated hardware
              security modules that support multi-signature authorization.
            </p>
            <p className="lead">
              The LCX Vault will provide clients with an end-to-end security
              solution and operational service, while allowing clients to
              maintain control of their private keys at all times. LCX’s
              advanced crypto wallets will be based on certified Hardware
              Security Module (HSM) technology. The hardware security modules
              will secure the private keys and manage the multi-authorization
              process.
            </p>
            <br />
            <p className="lead">
              Eliminating the operational risks inherent to digital asset
              trading and storage, the Vault facilitates:
            </p>
            <br />
            <ul>
              <li>
                Configurable access control lists for digital asset wallets
              </li>
              <li>Roles with customizable permissions</li>
              <li>Tailored multi-factor authentication for transactions</li>
              <li>Rate limiting, multi-signature and timelock controls</li>
              <li>Emergency recovery procedures.</li>
            </ul>
          </div>
        </div>
      </Fade>
    );
  }
}
