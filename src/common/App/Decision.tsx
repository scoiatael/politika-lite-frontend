import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {Decision} from "../Domain/Domain";

export class DecisionComponent extends Component<{
  decision: Decision,
  onClick: () => void,
}, {}> {

  public render() {
    const {decision, onClick} = this.props;
    const top = Math.random() * 200 - 200;
    const left = Math.random() * 200;
    const style = {
      top: `calc(50% - ${top.toFixed(0)}px)`,
      left: `calc(50% - ${left.toFixed(0)}px)`,
    };

    return (
      <button className="button" onClick={onClick} style={{...style, position: "absolute"}}>
        {decision.description}
      </button>
    );
  }
}

export default hot(module)(DecisionComponent);
