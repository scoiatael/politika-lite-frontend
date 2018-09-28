import { hot } from "react-hot-loader";
import React, { Component } from "react";
import DecisionComponent from "./Decision";
import DecisionDialogComponent from "./DecisionDialog";
import * as SAMPLE from "../Backend/sample";
import "bulma/bulma.sass";

const cls = require("./App.css");

import { ID, Resources, PowerCenters, Decision } from "../Domain/domain";
import { Backend } from "../Backend/Backend";

interface AppState {
    resources: Resources;
    power_centers: PowerCenters;
    decisions: Decision[];
    activeDecision: Decision | null;
}

export class App extends Component<{}, AppState> {
  public state = {
    resources: {
      money: 0,
      popularity: 0,
    },
    power_centers: {
      military: 0,
      judiciary: 0,
      legislation: 0,
      media: 0,
    },
    decisions: ([] as Decision[]),
    activeDecision: null,
  };

  private backend?: Backend;

  public componentDidMount() {
    this.backend = new Backend(
      "ws://localhost:8081",
      (newDecisions) => console.log({newDecisions}),
      (newDecisions) => console.log({newDecisions}),
      (newDecisions) => console.log({newDecisions}));

    this.setState((state) => Object.assign({}, state, {
      decisions: SAMPLE.decisions,
    }));
  }

  public openDecision(id: ID) {
    const { decisions } = this.state;
    const activeDecision = decisions.find((decision) => decision.id === id);
    if (activeDecision) {
      this.setState((state) => Object.assign({}, state, { activeDecision }));
    }
  }

  public closeDecision() {
    this.setState((state) => Object.assign({}, state, { activeDecision: null }));
  }

  public render() {
    const { decisions, activeDecision } = this.state;

    return (
      <div>
        <h1 className={cls.title}>
          Politika
        </h1>
        {decisions.map((decision) => <DecisionComponent
          key={decision.id}
          decision={decision}
          onClick={() => this.openDecision(decision.id)}
        />)}

        {activeDecision ? <DecisionDialogComponent
          decision={activeDecision}
          onClickClose={() => this.closeDecision()}
          /> : ""}
      </div>
    );
  }
}

export default hot(module)(App);
