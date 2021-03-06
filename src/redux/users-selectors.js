import { createSelector } from "reselect";

// пример использования библиотеки reselect
const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((user) => true);
});
////////

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getPortionSize = (state) => {
  return state.usersPage.portionSize;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

export const getTotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
};
