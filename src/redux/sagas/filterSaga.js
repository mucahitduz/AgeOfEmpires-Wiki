import { put, select, takeEvery } from "redux-saga/effects";
import { getFiltered } from "../features/unitSlice";

function* filter() {
  const state = yield select();
  let filtered = state.units.units;

  const filterCost = (label) => {
    const resource = label.toLowerCase();
    const costType = label;

    return state.units.units.filter((units) => {
      if (
        !(
          state.units[resource].value[0] === 0 &&
          (units.cost === null || units.cost[resource] === undefined)
        )
      ) {
        return (
          units.cost &&
          units.cost[costType] >= state.units[resource].value[0] &&
          units.cost[costType] <= state.units[resource].value[1]
        );
      }
    });
  };

  if (state.units.age !== "All") {
    filtered = filtered.filter((units) => units.age === state.units.age);
  }
  if (state.units.wood.checked) {
    filtered = filterCost("Wood");
    if (state.units.age !== "All") {
      filtered = filtered.filter((units) => units.age === state.units.age);
    }
  }
  if (state.units.food.checked) {
    filtered = filterCost("Food");
    if (state.units.age !== "All") {
      filtered = filtered.filter((units) => units.age === state.units.age);
    }
  }
  if (state.units.gold.checked) {
    filtered = filterCost("Gold");
    if (state.units.age !== "All") {
      filtered = filtered.filter((units) => units.age === state.units.age);
    }
  }

  yield put(getFiltered(filtered));
}

export function* watchFilterSaga() {
  yield takeEvery("units/setUnits", filter);
}
