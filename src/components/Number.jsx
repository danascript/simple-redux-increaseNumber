import React, { Component } from "react";
import { connect } from "react-redux";

class Number extends Component {
  render() {
    return <div className="number">{this.props.number}</div>;
  }
}

export default connect(state => ({
  number: state.number
}))(Number);
