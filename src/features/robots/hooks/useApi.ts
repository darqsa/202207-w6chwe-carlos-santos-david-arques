import { PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchRobots from "../../../services/fetchApi";
import { Robot, Robots } from "../models/Robot";
import { addRobot, loadRobots } from "../slices/robotsSlice";

interface RobotsApiResponse {
  robots: Robots;
}

const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const useLoadRobots = () => {
    useEffect(() => {
      fetchRobots(`${robotsApiUrl}`).then(({ robots }: RobotsApiResponse) =>
        dispatch(loadRobots(robots))
      );
    }, []);
  };

  const createRobot = async (newRobot: any) => {
    const response = await fetch(`${robotsApiUrl}create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRobot),
    });
    const { robot }: { robot: Robot } = await response.json();

    dispatch<PayloadAction<Robot>>(addRobot(robot));
  };

  return { useLoadRobots, createRobot };
};

export default useApi;
