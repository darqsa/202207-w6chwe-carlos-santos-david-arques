interface stats {
  speed: number;
  strength: number;
  creationDate: string;
}

export interface Robot {
  id: string;
  name: string;
  image: string;
  stats: stats;
}

export type Robots = Array<Robot>;
