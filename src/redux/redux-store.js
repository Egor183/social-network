import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer, { rootSagaProfilePage } from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, { rootSagaUsers } from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export function* rootSaga() {
  yield all([rootSagaProfilePage(), rootSagaUsers()]);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
