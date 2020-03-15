import axios from "axios";
import { defaultState } from "../store/defaultState";
export const formatDate = date => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const repos = async () => {
  const defaultresponse = defaultState.repos;
  try {
    let searchDateStart = new Date();
    searchDateStart.setDate(1);
    searchDateStart.setMonth(searchDateStart.getMonth() - 1);
    const searchDateStartStr = formatDate(searchDateStart);
    let SearchDateEnd = new Date();
    SearchDateEnd.setDate(1);
    const searchDateEndStr = formatDate(SearchDateEnd);

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:${searchDateStartStr}..${searchDateEndStr}&sort=stars&order=desc`
    );
    if (response && response.status === 200) {
      const responseData = response.data;
      const top5Repos = responseData.items.slice(0, 5);
      const polishTop5Repos = top5Repos.map(repo => {
        const { id, name, description, stargazers_count } = repo;
        return {
          id,
          name,
          description,
          stars: stargazers_count
        };
      });
      return polishTop5Repos;
    }
  } catch (e) {
    console.log(e.toString());
    return defaultresponse;
  }
};
