export default function stadiumReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_STADIUM_SUCCESS":
      return [...state, { ...action.stadium }];
    case "UPDATE_STADIUM_SUCCESS":
      return state.map((stadium) =>
        stadium.id === action.stadium.id ? action.stadium : stadium
      );
    case "LOAD_STADIUMS_SUCCESS":
      return action.stadiums;
    case "DELETE_STADIUM_OPTIMISTIC":
      return state.filter((stadium) => stadium.id !== action.stadium.id);
    default:
      return state;
  }
}