// Value from 0 to ∞
type ResourceValue = number;

export interface Resources {
  money: ResourceValue;
  popularity: ResourceValue;
}

// Value from -100 to 100
type PowerCenterValue = number;

export interface PowerCenters {
  media: PowerCenterValue;
  military: PowerCenterValue;
  judiciary: PowerCenterValue;
}

export type ID = string;

export interface Choice {
  id: ID;
  description: string;
  label: string;
}

export interface Decision {
  id: ID;
  description: string;
  deadline: Date;
  choices: Choice[];
}
