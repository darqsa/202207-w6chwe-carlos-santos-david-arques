import { Robot } from "../models/Robot";
import robotsReducer, { loadRobots } from "./robotsSlice";

describe("Given a robotsSlice function", () => {
  describe("When it is called with a load action and an initial state", () => {
    test("Then it should return the initial state", () => {
      const initialState: Robot[] = [
        {
          name: "testName",
          image: "testImage",
          creationDate: "0",
          stats: {
            strength: 0,
            speed: 0,
          },
          id: "",
        },
      ];

      const robots = robotsReducer(undefined, loadRobots(initialState));

      expect(robots).toEqual(initialState);
    });
  });
});
