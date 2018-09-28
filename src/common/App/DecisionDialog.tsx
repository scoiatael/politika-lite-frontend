import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {Decision, Choice} from "../Domain/domain";

export class DecisionDialogComponent extends Component<{
  decision: Decision,
  onClickClose: () => void,
}, {}> {
  public render() {
    const { decision, onClickClose } = this.props;

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New decision</p>
            <button className="delete" aria-label="close" onClick={onClickClose}></button>
          </header>
          <section className="modal-card-body">
            {decision.description}
          </section>
          <footer className="modal-card-foot">
            {decision.choices.map((choice) => this.renderChoice(choice))}
          </footer>
        </div>
      </div>
    );
  }

  private renderChoice(choice: Choice) {
    return <button key={choice.id} className="button">{choice.label}</button>;
  }
}

export default hot(module)(DecisionDialogComponent);
