import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, repoReducer } from "./reducer";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { userSaga } from "./userSaga";
import { repoSaga } from "./repoSaga";
import { fetchSaga } from "./fetchSaga";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ users: userReducer, repos: repoReducer }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(userSaga);
sagaMiddleware.run(repoSaga);
sagaMiddleware.run(fetchSaga);
