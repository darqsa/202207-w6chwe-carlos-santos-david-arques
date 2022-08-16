import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot, Robots } from "../models/Robot";

const initialState: Robots = [
  {
    id: "",
    image: "",
    name: "",
    creationDate: "",
    stats: { speed: 1, strength: 1 },
  },
];

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots(state, action: PayloadAction<Robots>) {
      return action.payload;
    },
    addRobot: (previousRobots, action: PayloadAction<Robot>) => [
      ...previousRobots,
      action.payload,
    ],
  },
});

export const { loadRobots: loadRobotsAction, addRobot } = robotsSlice.actions;
export default robotsSlice.reducer;
