import React from "react";
import { increaseNumber } from "../actions";
import { connect } from "react-redux";

class increaseButton extends React.Component {
  render() {
    return <button onClick={e => this.props.increase(5)}>Increase me!</button>;
  }
}

export default connect(state => ({}), { increase: increaseNumber })(
  increaseButton
);
