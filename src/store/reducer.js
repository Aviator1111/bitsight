import { defaultState } from "./defaultState";
import * as Actions from "./actions";

export const userReducer = (state = defaultState.users, action) => {
  switch (action.type) {
    case Actions.SET_PROLIFIC_USERS:
      return [...action.users];

    default:
      return state;
  }
};

export const repoReducer = (state = defaultState.repos, action) => {
  switch (action.type) {
    case Actions.SET_HOT_REPOS:
      return [...action.repos];
    default:
      return state;
  }
};
