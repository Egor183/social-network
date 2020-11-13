import { setAuth } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

export type initialStateType = {
  initialized: boolean;
};

let initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any) : initialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof SET_INITIALIZED;
};

export const setInitialized = () : initializedSuccessActionType => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => (dispatch: any) => {
  // thunkCreator
  let promise = dispatch(setAuth());
  Promise.all([promise]).then(() => dispatch(setInitialized()));
};

export default appReducer;
