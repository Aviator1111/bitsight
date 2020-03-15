import { takeLatest, put, delay } from "redux-saga/effects";
import {
  REFRESH_PROLIFIC_USERS,
  refreshProlificUsers,
  getProlificUsers
} from "./actions";

function* fetchUsersContinously(action) {
  try {
    yield put(getProlificUsers());
    yield delay(120000);
    yield put(refreshProlificUsers());
  } catch (e) {
    console.log("fetch users error", e.toString());
  }
}

export function* fetchSaga() {
  yield takeLatest(REFRESH_PROLIFIC_USERS, fetchUsersContinously);
}
