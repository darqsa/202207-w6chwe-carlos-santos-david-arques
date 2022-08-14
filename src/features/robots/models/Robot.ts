interface Stats {
  speed: number;
  strength: number;
  creationDate: string;
}

export interface Robot {
  id: string;
  name: string;
  image: string;
  stats: Stats;
}

export type Robots = Array<Robot>;
