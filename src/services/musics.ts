export const getMusics = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=all";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  } as any;

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    return error;
  }
};
