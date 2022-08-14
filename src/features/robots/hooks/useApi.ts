import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchRobots from "../../../services/fetchApi";
import { Robots } from "../models/Robot";
import { loadRobots } from "../slices/robotsSlice";

interface robotsApiResponse {
  robots: Robots;
}

const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();

  const useLoadRobots = () => {
    useEffect(() => {
      fetchRobots(`${robotsApiUrl}`).then(({ robots }: robotsApiResponse) =>
        dispatch(loadRobots(robots))
      );
    }, []);
  };

  return { useLoadRobots };
};

export default useApi;
