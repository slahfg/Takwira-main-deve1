import * as stadiumApi from "../../api/stadiumApi";


export function loadstadiumSuccess(stadiums) {
  return { type: "LOAD_STADIUMS_SUCCESS", stadiums };
}

export function createstadiumSuccess(stadium) {
  return { type: "CREATE_STADIUM_SUCCESS", stadium };
}

export function updatestadiumSuccess(stadium) {
  return { type: "UPDATE_STADIUM_SUCCESS", stadium };
}

export function deletestadiumOptimistic(stadium) {
  return { type: "DELETE_STADIUM_OPTIMISTIC", stadium };
}

export function loadstadiums() {
  return function (dispatch) {
    return stadiumApi
      .getstadiums()
      .then((stadiums) => {
        dispatch(loadstadiumSuccess(stadiums));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function savestadium(stadium) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return stadiumApi
      .savestadium(stadium)
      .then((savedstadium) => {
        stadium.id
          ? dispatch(updatestadiumSuccess(savedstadium))
          : dispatch(createstadiumSuccess(savedstadium));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deletestadium(stadium) {
  return function (dispatch) {
    
    dispatch(deletestadiumOptimistic(stadium));
    return stadiumApi.deletestadium(stadium.id);
  };
}

