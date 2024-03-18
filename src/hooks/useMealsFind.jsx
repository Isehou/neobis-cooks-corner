import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_MEAL } from "../services/dataService";

function useMealsFind() {
  const [list, setList] = useState([]);

  const fetchData = (searchTerm) => {
    axios
      .get(SEARCH_MEAL, {
        params: { s: searchTerm },
      })
      .then((res) => {
        console.log(res);
        if (res.data.meals) setList(res.data.meals);
      });
  };

  const find = (searchTerm) => {
    fetchData(searchTerm);
  };

  return { list, find };
}

export default useMealsFind;
