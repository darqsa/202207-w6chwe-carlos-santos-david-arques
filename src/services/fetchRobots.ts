const robotsApiUrl = process.env.REACT_APP_ROBOTS_API_URL;

const fetchRobots = () =>
  fetch(`${robotsApiUrl}`).then((response) =>
    response
      .json()
      .then(({ robots }) => robots)
      .catch((error) => error)
  );

export default fetchRobots;
