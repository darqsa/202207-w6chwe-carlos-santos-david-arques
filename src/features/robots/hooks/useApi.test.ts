import { act, renderHook, waitFor } from "@testing-library/react";
import useApi from "./useApi";
import { loadRobotsAction } from "../slices/robotsSlice";
import { Robots } from "../models/Robot";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../services/fetchApi", () => () => ({
  robots: [
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
  ],
}));

describe("Given a useApi custom hook", () => {
  describe("When its oadRobots function its invoked", () => {
    describe("And fetchRobots returns a list with WallE and Lika", () => {
      test("Then the robots returned by useAPI should be WallE and Laika", async () => {
        const expectedRobots: Robots = [
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

        const { result } = renderHook(useApi);

        await act(async () => {
          await result.current.loadRobots();
        });

        await waitFor(() => {
          expect(mockDispatch).toHaveBeenCalledWith(
            loadRobotsAction(expectedRobots)
          );
        });
      });
    });
  });
});
