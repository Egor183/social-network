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
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  },

  followSuccess(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollowSuccess(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getSmallUserPhoto(userId) {
    return instance.get(`profile/${userId}`);
  },

  login(formData) {
    return instance.post(`/auth/login/`, {
      email: formData.login,
      password: formData.password,
      rememberMe: formData["remember me:"],
    });
  },

  logout() {
    return instance.delete(`/auth/login/`);
  },
};
