interface stats {
  speed: number;
  strength: number;
  creationDate: string;
}

export interface Robot {
  name: string;
  image: string;
  stats: stats;
}

export type Robots = Array<Robot>;
