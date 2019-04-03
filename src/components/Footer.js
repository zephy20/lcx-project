import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="row footer1">
          <div className="col-md-6 col-xs-6 col-lg-4">
            <p className="h5">Links</p>

            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <li style={{ margin: "5px 0" }}>Telegram Group</li>
              <li style={{ margin: "5px 0" }}>Announcement Channel</li>
            </ul>
          </div>
          <br />
          <div className="col-md-6 col-xs-6 col-lg-4">
            <p className="h5">Company</p>
            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <li style={{ margin: "5px 0" }}>Imprint</li>
              <li style={{ margin: "5px 0" }}>Press Kit</li>
              <li style={{ margin: "5px 0" }}>Careers</li>
              <li style={{ margin: "5px 0" }}>Contact</li>
              <li style={{ margin: "5px 0" }}>Blog</li>
            </ul>
          </div>
          <br />
          <div className="col-md-12 col-xs-12 col-lg-4">
            <p className="h5">Contact</p>
            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <li style={{ margin: "5px 0" }}>hello@lcx.com</li>
              <li style={{ margin: "5px 0" }} />
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <p className="lead">
            Made with &nbsp;
            <FontAwesomeIcon icon={faHeart} size="md" />
            &nbsp; by Kartik
          </p>
        </div>
      </div>
    );
  }
}
