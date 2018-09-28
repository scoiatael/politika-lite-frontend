import { hot } from "react-hot-loader";
import React, { Component } from "react";

const cls = require("./App.css");

import {Resources, PowerCenters, Decision} from "../Domain/domain";
import {Backend} from "../Backend/Backend";

interface AppState {
    resources: Resources;
    power_centers: PowerCenters;
    decisions: Decision[];
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
  };

  private backend?: Backend;

  public componentDidMount() {
    this.backend = new Backend(
      "ws://localhost:8081",
      (newDecisions) => console.log({newDecisions}),
      (newDecisions) => console.log({newDecisions}),
      (newDecisions) => console.log({newDecisions}));
  }

  public render() {
    return (
      <div>
        <h1 className={cls.title}>
          Hello, World!
        </h1>
        <code>
          {JSON.stringify(this.state.decisions, null, "\t")}
        </code>
      </div>
    );
  }
}

export default hot(module)(App);
