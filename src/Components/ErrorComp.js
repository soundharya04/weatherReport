import React, { Component } from "react";

class ErrorComp extends Component {
  render() {
    console.log(this.props.error);
    return this.props.error ? (
      <div>
        <span>Please enter valid city name</span>
      </div>
    ) : null;
  }
}

export default ErrorComp;
