/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import authenticated, { AuthenticatedActionType, AuthenticatedState } from './authenticated';
import firstLoad, { FirstLoadActionType, FirstLoadState } from './firstLoad';
import online, { OnlineActionType, OnlineState } from './online';
import onlineMode, { OnlineModeActionType, OnlineModeState } from './onlineMode';

export type ActionType =
  | AuthenticatedActionType
  | FirstLoadActionType
  | OnlineActionType
  | OnlineModeActionType;

export interface State {
  authenticated: AuthenticatedState;
  firstLoad: FirstLoadState;
  online: OnlineState;
  onlineMode: OnlineModeState;
}

export default combineReducers({
  authenticated,
  firstLoad,
  online,
  onlineMode,
});
