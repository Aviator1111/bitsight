import { takeLatest, put, call } from "redux-saga/effects";
import { GET_HOT_REPOS, setHotRepos } from "./actions";
import { repos } from "../service";

function* fetchRepos(action) {
  try {
    const reposList = yield call(repos);
    yield put(setHotRepos(reposList));
  } catch (e) {
    console.log("fetch repos error", e.toString());
  }
}

export function* repoSaga() {
  yield takeLatest(GET_HOT_REPOS, fetchRepos);
}
