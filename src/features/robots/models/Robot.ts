interface Stats {
  speed: number;
  strength: number;
}

export interface Robot {
  id?: string;
  name: string;
  image: string;
  creationDate: string;
  stats: Stats;
}

export type Robots = Array<Robot>;
