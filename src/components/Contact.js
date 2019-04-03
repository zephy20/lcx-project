import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Contact extends Component {
  render() {
    return (
      <div style={{ maxWidth: "1200px ", margin: "auto", padding: "20px" }}>
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <p className="h2">Got any Questions?</p>
          <Fade>
            <div className="row" style={{ padding: "2%" }}>
              <div className="col-md-6 col-xs-12">
                <Card>
                  <Card.Header>
                    <p className="lead">You can contact us here</p>
                  </Card.Header>
                  <Form style={{ padding: "10%" }}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Write your message here.."
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card>
              </div>
              <div className="col-md-6 col-xs-12">
                <p className="h4">Address:</p>
                <p>
                  LCX AG <br />
                  Landstraße 60 <br /> 9490 Vaduz
                </p>

                <br />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
