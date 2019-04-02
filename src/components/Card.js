import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class DataCard extends Component {
  render() {
    return (
      <div style={{ padding: "2%" }}>
        <Card border="white" style={{ width: "18rem", cursor: "pointer" }}>
          <Card.Img variant="top" src={this.props.item.img} />
        </Card>
      </div>
    );
  }
}
