import axios from "axios";
import { defaultState } from "../store/defaultState";
import { formatDate } from "./repos";

export const users = async () => {
  const defaultresponse = defaultState.users;
  try {
    let searchDateStart = new Date();
    searchDateStart.setFullYear(searchDateStart.getFullYear() - 1);
    const searchDateStartStr = formatDate(searchDateStart);
    const response = await axios.get(
      `https://api.github.com/search/users?q=created:>=${searchDateStartStr}&sort=followers&order=desc`
    );
    if (response && response.status === 200) {
      const responseData = response.data;
      const top5Users = responseData.items.slice(0, 5);
      const polishTop5Users = top5Users.map(async user => {
        const { id, avatar_url, login, followers_url } = user;
        let followers = 0;
        const per_page_results = 100;
        const followersResponse = await axios.get(
          `${followers_url}?per_page=${per_page_results}`
        );
        if (followersResponse && followersResponse.status === 200) {
          const link = followersResponse.headers.link;
          if (link) {
            const totalPages = parseInt(
              link
                .split(",")[1]
                .split(">")[0]
                .split("&page=")[1]
            );
            const lastPageResponse = await axios.get(
              `${followers_url}?per_page=${per_page_results}&page=${totalPages}`
            );
            if (lastPageResponse && lastPageResponse.status === 200) {
              followers = (totalPages - 1) * 100 + lastPageResponse.data.length;
            }
          } else {
            followers = followersResponse.data.length;
          }
        }
        return {
          id,
          avatar: avatar_url,
          login,
          followers
        };
      });
      const resolvedPolishTop5Users = await Promise.all(polishTop5Users);
      return resolvedPolishTop5Users;
    }
  } catch (e) {
    console.log(e.toString());
    return defaultresponse;
  }
};
