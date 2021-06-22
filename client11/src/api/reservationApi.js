import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/reservations/";

export function getreservations() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savereservation(reservation) {
  return fetch(baseUrl + (reservation.id || ""), {
    method: reservation.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(reservation)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletereservation(reservationId) {
  return fetch(baseUrl + reservationId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
