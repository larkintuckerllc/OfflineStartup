/* eslint-disable import/no-cycle */
import { ActionType, State } from '.';

// ACTIONS
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

interface SetAuthenticatedAction {
  payload: boolean;
  type: typeof SET_AUTHENTICATED;
}

export type AuthenticatedActionType = SetAuthenticatedAction;

// ACTION CREATORS
export const setAuthenticated = (state: boolean): SetAuthenticatedAction => ({
  payload: state,
  type: SET_AUTHENTICATED,
});

// REDUCERS
export type AuthenticatedState = boolean;

export default (state: AuthenticatedState = false, action: ActionType): AuthenticatedState => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return action.payload;
    default:
      return state;
  }
};

// SELECTORS
export const getAuthenticated = (state: State): AuthenticatedState => state.authenticated;
