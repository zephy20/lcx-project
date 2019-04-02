import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div style={{ maxWidth: "1200px ", margin: "auto", padding: "20px" }}>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p className="h2">About Us</p>
          <div style={{ textAlign: "left" }}>
            <p>
              LCX - Liechtenstein Cryptoassets Exchange – will in several
              consecutive phases provide an exchange made for professional
              investors offering crypto custody, an advanced trading platform
              for security tokens and other Cryptoassets, and an international
              FIAT to Crypto exchange as a joint-venture with a leading
              crypto-exchange.
            </p>
            <p>
              LCX operates and offer its services under the existing regulatory
              framework of the Principality of Liechtenstein and will also
              comply with the announced Liechtenstein Blockchain Act, once in
              force.
            </p>
            <p>
              LCX rolls out its business in several phases and intends to obtain
              a MIFID II license in accordance with the Liechtenstein Banking
              Act and further licenses under the Blockchain Act. While
              conducting its business LCX will take all required efforts to
              comply with existing Anti-Money Laundering (AML) and Know Your
              Customer (KYC) regulations applicable for the regulated financial
              market and thus will meet highest market standards.
            </p>
            <p>
              LCX is operating in Liechtenstein, a AAA-rated center for banking
              and finance located in the heart of Europe. The government has
              worked for more than two years on legislation that will take a
              holistic approach by defining all aspects of the blockchain
              industry and building the legal basis and legal security for an
              entire token economy.
            </p>
            <p>
              This means that professional and institutional investors will
              finally have the opportunity of a fully compliant and trustworthy
              way to participate in the most important emerging asset class.
            </p>
            <hr />
          </div>
        </div>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p className="h5">Our Advisors</p>
          <div style={{ textAlign: "left" }}>
            <p>
              LCX is working with a selected group of international acclaimed
              thought leaders, influential industry leaders and experienced
              entrepreneurs. All advisors are long-term business contacts or
              even friends of Monty C. M. Metzger and the management team.
            </p>
            <br />
            <p>
              The Advisors of LCX are engaging with the management team on a
              regular basis. LCX is holding advisory calls, one-on-one sessions
              on particular topics and personal closed-door advisory sessions
              regularly.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
