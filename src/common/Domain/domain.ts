type ResourceValue = number;

export interface Resources {
  money: ResourceValue;
  popularity: ResourceValue;
}

// Value from 0 to 100 in percents
type PowerCenterValue = number;
export interface PowerCenters {
  media: PowerCenterValue;
  legislation: PowerCenterValue;
  military: PowerCenterValue;
  judiciary: PowerCenterValue;
}

export type ID = string;

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

export interface Decision {
  id: ID;
  description: string;
  deadline: Date;
  choices: Choice[];
}
