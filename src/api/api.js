import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e298b9fc-ca0a-4ba1-892e-3574a504caec",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};
