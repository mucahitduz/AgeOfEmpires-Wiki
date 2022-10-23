import { all } from "redux-saga/effects";
import { watchAgeSaga } from "./ageSaga";
import { watchFilterSaga } from "./filterSaga";
import { watchCostSaga } from "./costSaga";

export default function* rootSaga() {
  yield all([watchFilterSaga(), watchAgeSaga(), watchCostSaga()]);
}
