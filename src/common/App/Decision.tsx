import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {ID, Decision, Choice} from "../Domain/domain";

export class DecisionComponent extends Component<{
  decision: Decision,
  onClick: () => void,
}, {}> {
  public render() {
    const {decision, onClick} = this.props;
    return (
      <button className="button" onClick={onClick}>
        {decision.description}
      </button>
    );
  }
}

export default hot(module)(DecisionComponent);
