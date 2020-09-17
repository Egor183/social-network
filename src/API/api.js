import * as axios from "axios";

let instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f5994dce-143b-4436-bce8-67b938d360c1",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },

  getUserData(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  followSuccess(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollowSuccess(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getSmallUserPhoto(userId) {
    return instance.get(`profile/${userId}`);
  },
};
