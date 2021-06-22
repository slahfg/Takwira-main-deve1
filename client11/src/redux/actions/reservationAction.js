import * as reservationApi from "../../api/reservationApi";


export function loadreservationSuccess(reservations) {
  return { type: "LOAD_RESERVATIONS_SUCCESS", reservations };
}

export function createreservationSuccess(reservation) {
  return { type: "CREATE_RESERVATION_SUCCESS", reservation };
}

export function updatereservationSuccess(reservation) {
  return { type: "UPDATE_RESERVATION_SUCCESS", reservation };
}

export function deletereservationOptimistic(reservation) {
  return { type: "DELETE_RESERVATION_OPTIMISTIC", reservation };
}

export function loadreservations() {
  return function (dispatch) {
    return reservationApi
      .getreservations()
      .then((reservations) => {
        dispatch(loadreservationSuccess(reservations));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function savereservation(reservation) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return reservationApi
      .savereservation(reservation)
      .then((savedreservation) => {
        reservation.id
          ? dispatch(updatereservationSuccess(savedreservation))
          : dispatch(createreservationSuccess(savedreservation));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deletereservation(reservation) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deletereservationOptimistic(reservation));
    return reservationApi.deletereservation(reservation.id);
  };
}
