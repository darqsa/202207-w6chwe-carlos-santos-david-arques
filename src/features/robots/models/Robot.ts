export interface Robot {
  id?: string;
  name: string;
  image: string;
  creationDate: string;
  stats: {
    speed: number;
    strength: number;
  };
  owner: {
    _id: string;
    userName: string;
  };
}

export type Robots = Array<Robot>;
