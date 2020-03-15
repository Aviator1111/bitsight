import { takeLatest, put, call } from "redux-saga/effects";
import { GET_PROLIFIC_USERS, setProlificUsers } from "./actions";
import { users } from "../service";

function* fetchUsers(action) {
  try {
    const usersList = yield call(users);
    yield put(setProlificUsers(usersList));
  } catch (e) {
    console.log("fetch users error", e.toString());
  }
}

export function* userSaga() {
  yield takeLatest(GET_PROLIFIC_USERS, fetchUsers);
}
