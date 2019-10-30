/* eslint-disable import/no-cycle */
import { ActionType, State } from '.';
import { SET_ONLINE } from './online';

// ACTIONS
const SET_ONLINE_MODE = 'SET_ONLINE_MODE';

interface SetOnlineModeAction {
  payload: boolean;
  type: typeof SET_ONLINE_MODE;
}

export type OnlineModeActionType = SetOnlineModeAction;

// ACTION CREATORS
export const setOnlineMode = (state: boolean): SetOnlineModeAction => ({
  payload: state,
  type: SET_ONLINE_MODE,
});

// REDUCERS
export type OnlineModeState = boolean;

export default (state: OnlineModeState = true, action: ActionType): OnlineModeState => {
  switch (action.type) {
    case SET_ONLINE_MODE:
      return action.payload;
    case SET_ONLINE:
      if (action.payload) {
        return state;
      }
      return false;
    default:
      return state;
  }
};

// SELECTORS
export const getOnlineMode = (state: State): OnlineModeState => state.onlineMode;
