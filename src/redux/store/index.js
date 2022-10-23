import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import unitSlice from "../features/unitSlice";
import rootSaga from "../sagas/rootSaga";
import { useDispatch, useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    units: unitSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
