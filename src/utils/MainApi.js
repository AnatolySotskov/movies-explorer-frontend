export const BASE_URL = "https://api.diplom.anatolysotskov.nomoredomains.xyz";
// export const BASE_URL = "http://localhost:3000";

const request = (url, options) => {
  const fetchAddress = `${BASE_URL}/${url}`;

  return fetch(fetchAddress, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      // return Promise.reject(`Ошибка ${res.status}`);
      return Promise.reject(res.status);

    }
  });
};

export const register = (name, email, password) => {
  return request("signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const authorize = (email, password) => {
  return request("signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return request("users/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
};

// export const handleResponse = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     Promise.reject(`Ошибка ${res.status}`);
//   }
// };

export const getInfoUser = () => {
  const token = localStorage.getItem("token");
  return request("users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const patchProfile = ({ name, email }) => {
  const token = localStorage.getItem("token");
  return request("users/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  });
};

export const createMovies = (moviesData) => {
  const token = localStorage.getItem("token");
  return request("movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...moviesData }),
  });
};

export const getSaveMovies = () => {
  const token = localStorage.getItem("token");
  return request("movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMovies = (movieId) => {
  const token = localStorage.getItem("token");
  return request(`movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
