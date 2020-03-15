export const GET_PROLIFIC_USERS = "GET_PROLIFIC_USERS";
export const SET_PROLIFIC_USERS = "SET_PROLIFIC_USERS";
export const REFRESH_PROLIFIC_USERS = "REFRESH_PROLIFIC_USERS";

export const GET_HOT_REPOS = "GET_HOT_REPOS";
export const SET_HOT_REPOS = "SET_HOT_REPOS";

export const getProlificUsers = () => ({
  type: GET_PROLIFIC_USERS
});

export const setProlificUsers = users => ({
  type: SET_PROLIFIC_USERS,
  users
});

export const getHotRepos = () => ({
  type: GET_HOT_REPOS
});

export const setHotRepos = repos => ({
  type: SET_HOT_REPOS,
  repos
});

export const refreshProlificUsers = () => ({
  type: REFRESH_PROLIFIC_USERS
});
