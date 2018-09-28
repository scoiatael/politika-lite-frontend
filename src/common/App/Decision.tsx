import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {Decision, Choice} from "../Domain/domain";

export class DecisionComponent extends Component<{
  decision: Decision,
}, {}> {
  public render() {
    const {decision} = this.props;
    return (
      <div>
        {decision.description}
        {decision.choices.map((choice) => this.renderChoice(choice))}
      </div>
    );
  }

  private renderChoice(choice: Choice) {
    return <div key={choice.id}>
      {choice.label}
    </div>;
  }
}

export default hot(module)(DecisionComponent);
