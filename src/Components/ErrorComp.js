import React, { Component } from "react";

class ErrorComp extends Component {
  render() {
    console.log(this.props.error);
    return this.props.error ? (
      <div className="container error">
        <h5>Please enter valid city name</h5>
      </div>
    ) : null;
  }
}

export default ErrorComp;
