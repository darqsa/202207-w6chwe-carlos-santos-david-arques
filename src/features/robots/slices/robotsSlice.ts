import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "../models/Robot";

const initialState: Robots = [
  {
    id: "",
    image: "",
    name: "",
    stats: { creationDate: "", speed: 1, strength: 1 },
  },
];

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots(state, action: PayloadAction<Robots>) {
      return action.payload;
    },
  },
});

export const { loadRobots: loadRobotsAction } = robotsSlice.actions;
export default robotsSlice.reducer;
