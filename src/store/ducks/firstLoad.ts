/* eslint-disable import/no-cycle */
import { ActionType, State } from '.';
import { SET_AUTHENTICATED } from './authenticated';

// ACTIONS
const SET_FIRST_LOAD = 'SET_FIRST_LOAD';

interface SetFirstLoadAction {
  payload: boolean;
  type: typeof SET_FIRST_LOAD;
}

export type FirstLoadActionType = SetFirstLoadAction;

// ACTION CREATORS
export const setFirstLoad = (state: boolean): SetFirstLoadAction => ({
  payload: state,
  type: SET_FIRST_LOAD,
});

// REDUCERS
export type FirstLoadState = boolean;

export default (state: FirstLoadState = true, action: ActionType): FirstLoadState => {
  switch (action.type) {
    case SET_FIRST_LOAD:
      return action.payload;
    case SET_AUTHENTICATED:
      if (action.payload) {
        return state;
      }
      return true;
    default:
      return state;
  }
};

// SELECTORS
export const getFirstLoad = (state: State): FirstLoadState => state.firstLoad;
