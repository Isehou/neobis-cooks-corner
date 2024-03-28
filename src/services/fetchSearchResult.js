import axios from "axios";
import { MAIN_API } from "./endpoints";

const searchQuery = "/recipes/search/";

async function fetchSearchResult() {
  try {
    const response = await axios.get(`${MAIN_API}${searchQuery}`);
    console.log("Fetch result", response.data);
  } catch (error) {
    console.log("Error request", error);
  }
}
export default fetchSearchResult;
