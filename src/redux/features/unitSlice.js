import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/age-of-empires-units.json";

const unitSlice = createSlice({
  name: "units",
  initialState: {
    units: data.units,
    age: "All",
    filterData: data.units,
    wood: { checked: false, value: [0, 200] },
    food: { checked: false, value: [0, 200] },
    gold: { checked: false, value: [0, 200] },
  },
  reducers: {
    setUnits: (state, action) => {
      state.age = action.payload;
      if (action.payload.payload) {
        if (action.payload.payload.costName) {
          if (action.payload.payload.costName == "wood") {
            state.units = state.filterData;
            state.wood.value[0] = action.payload.payload.value[0];
            state.wood.value[1] = action.payload.payload.value[1];
            if (state.age.payload.age == "All") {
              state.age = action.payload.payload.age;
            }
          }

          if (action.payload.payload.costName == "food") {
            state.units = state.filterData;
            state.food.value[0] = action.payload.payload.value[0];
            state.food.value[1] = action.payload.payload.value[1];
            if (state.age.payload.age == "All") {
              state.age = action.payload.payload.age;
            }
          }

          if (action.payload.payload.costName == "gold") {
            state.units = state.filterData;
            state.gold.value[0] = action.payload.payload.value[0];
            state.gold.value[1] = action.payload.payload.value[1];
            if (state.age.payload.age == "All") {
              state.age = action.payload.payload.age;
            }
          }
        }
      }
    },
    getFiltered: (state, action) => {
      state.filterData = action.payload;
    },
    setFilter: (state, action) => {
      switch (action.payload.type) {
        case "COST": {
          if (
            action.payload.checked === true ||
            action.payload.checked === false
          ) {
            return {
              ...state,
              [action.payload.costName]: {
                checked: action.payload.checked,
                value: state[action.payload.costName].value,
              },
            };
          }
          if (action.payload.value) {
            return {
              ...state,
              [action.payload.costName]: {
                checked: state[action.payload.costName].checked,
              },
            };
          }
          break;
        }
        case "SET_FILTERED":
          return {
            ...state,
            filterData: action.payload.value,
          };

        default:
          return state;
      }
    },
  },
});

export const { setUnits, getFiltered, setFilter } = unitSlice.actions;

export default unitSlice.reducer;
