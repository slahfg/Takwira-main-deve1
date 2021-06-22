import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/stadiums/";

export function getstadiums() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savestadium(stadium) {
  return fetch(baseUrl + (stadium.id || ""), {
    method: stadium.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(stadium)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletestadium(stadiumId) {
  return fetch(baseUrl + stadiumId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
