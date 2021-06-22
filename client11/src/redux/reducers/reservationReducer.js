export default function reservationReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_RESERVATION_SUCCESS":
      return [...state, { ...action.reservation }];
    case "UPDATE_RESERVATION_SUCCESS":
      return state.map((reservation) =>
        reservation.id === action.reservation.id ? action.reservation : reservation
      );
    case "LOAD_RESERVATIONS_SUCCESS":
      return action.reservations;
    case "DELETE_RESERVATION_OPTIMISTIC":
      return state.filter((reservation) => reservation.id !== action.reservation.id);
    default:
      return state;
  }
}