const fetchApi = (apiUrl: string) =>
  fetch(apiUrl).then((response) =>
    response
      .json()
      .then((respnse) => respnse)
      .catch((error) => error)
  );

export default fetchApi;
