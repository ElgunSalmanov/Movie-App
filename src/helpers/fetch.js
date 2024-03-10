import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

async function getMovies(path) {
  try {
    const response = await axios.get(`${BASE_URL}${path}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export default getMovies;
