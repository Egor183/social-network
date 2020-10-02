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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
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
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },

  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);

    return instance.put("profile/photo/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`);
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
