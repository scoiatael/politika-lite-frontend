import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {Decision} from "../Domain/Domain";

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
