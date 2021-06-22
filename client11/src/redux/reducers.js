import { combineReducers } from "redux";

import stadiums from "./reducers/stadiumReducer";

import reservations from './reducers/reservationReducer';



const reducers = combineReducers({
  stadiums,
  reservations,
});

export default reducers;
