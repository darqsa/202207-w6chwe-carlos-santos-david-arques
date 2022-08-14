import { useDispatch } from "react-redux";
import { Robots } from "../models/Robot";
import fetchRobots from "../services/fetchRobots";
import { loadRobots } from "../slices/robotsSlice";

const useApi = () => {
  const dispatch = useDispatch();

  const useLoadRobots = () => {
    fetchRobots().then((robots: Robots) => dispatch(loadRobots(robots)));
  };

  return { useLoadRobots };
};

export default useApi;
