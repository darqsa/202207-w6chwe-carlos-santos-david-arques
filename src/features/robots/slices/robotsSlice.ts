import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "../models/Robot";

const initialState: Robots = [];

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
