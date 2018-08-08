import React, { Component } from 'react';
import { Button, Alert, Col } from 'react-bootstrap';

class AlertDismissable extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          {/* <Col md={1}></Col>
          <Col md={4}> */}
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <h3>Data is out of range!</h3>
            <h4>
              Please make sure to check the appropriate sensors as
              something seems to be wrong with at least one of the sensors.
              </h4>
            <p>
              <Button pull-right onClick={this.handleDismiss}>Close</Button>
            </p>
          </Alert>
          {/* </Col>
          <Col md={1}></Col> */}
        </div>
      )
    }
    return <Button onClick={this.handleShow}>Show Alert</Button>;
  }
}

export default AlertDismissable;