export const API_URL = "http://192.168.43.132:8080";

export const DEFAULT_OPTS = {
  "Content-Type": "application/json; charset=utf-8"
};

export const findIndex = (arr, id) =>
  arr.reduce((acc, curr, idx) => {
    if (curr._id === id) {
      return idx;
    }

    return acc;
  }, -1);
