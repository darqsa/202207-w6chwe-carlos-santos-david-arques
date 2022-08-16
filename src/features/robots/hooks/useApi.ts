import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import fetchApi from "../../../services/fetchApi";
import { loadRobotsAction, addRobot } from "../slices/robotsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { Robot } from "../models/Robot";

export const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state: RootState) => state.robots);

  const loadRobots = useCallback(async () => {
    const { robots } = await fetchApi(`${robotsApiUrl}robots`);

    dispatch(loadRobotsAction(robots));
  }, [dispatch]);

  const createRobot = async (newRobot: any) => {
    const response = await fetch(`${robotsApiUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRobot),
    });
    const { robot }: { robot: Robot } = await response.json();

    dispatch<PayloadAction<Robot>>(addRobot(robot));
  };

  return { robots, loadRobots, createRobot };
};

export default useApi;
