import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import fetchApi from "../../../services/fetchApi";
import { loadRobotsAction } from "../slices/robotsSlice";

const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state: RootState) => state.robots);

  const loadRobots = useCallback(async () => {
    const { robots } = await fetchApi(`${robotsApiUrl}`);

    dispatch(loadRobotsAction(robots));
  }, [dispatch]);

  return { robots, loadRobots };
};

export default useApi;
