export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Ошибка ${res.status}`);
  }
};

export function getCards() {
  return fetch(MOVIES_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => handleResponse(res));
}