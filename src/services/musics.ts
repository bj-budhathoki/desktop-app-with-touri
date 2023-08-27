export const getMusics = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dc3f81214bmsh4c616431491b5fcp1e1b4ejsnc207d9a4f4d9",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    return error;
  }
};
