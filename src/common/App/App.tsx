import { hot } from "react-hot-loader";
import React, { Component } from "react";

const cls = require("./App.css");

type ResourceValue = number;

interface Resources {
  money: ResourceValue;
  popularity: ResourceValue;
}

// Value from 0 to 100 in percents
type PowerCenterValue = number;
interface PowerCenters {
  media: PowerCenterValue;
  legislation: PowerCenterValue;
  military: PowerCenterValue;
  judiciary: PowerCenterValue;
}

type ID = string;

enum ResourceEffectType {
  ChangeResource = "ChangeResource",
}

enum PowerCenterEffectType {
  ChangePowerCenter = "ChangePowerCenter",
}

enum ResourceEffectTarget {
  Money = "money",
  Popularity = "popularity",
}

enum PowerCenterEffectTarget {
  Media = "media",
  Legislation = "legislation",
  Military = "military",
  Judiciary = "judiciary",
}

interface ResourceEffect {
  type: ResourceEffectType;
  target: ResourceEffectTarget;
  value: ResourceValue;
}

interface PowerCenterEffect {
  type: PowerCenterEffectType;
  target: PowerCenterEffectTarget;
  value: PowerCenterValue;
}

type Effect = ResourceEffect | PowerCenterEffect;

interface Choice {
  id: ID;
  description: string;
  label: string;
  effects: Effect[];
}
interface Decision {
  id: ID;
  description: string;
  deadline: Date;
  choices: Choice[];
}

interface AppState {
    resources: Resources;
    powerCenters: PowerCenters;
    decisions: Decision[];
}

export class App extends Component<{}, AppState> {
  public state = {
    resources: {
      money: 0,
      popularity: 0,
    },
    powerCenters: {
      military: 0,
      judiciary: 0,
      legislation: 0,
      media: 0,
    },
    decisions: [],
  };

  public render() {
    return (
      <div>
        <h1 className={cls.title}>
          Hello, World!
        </h1>
      </div>
    );
  }
}

export default hot(module)(App);
