/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import online, { OnlineActionType, OnlineState } from './online';
import onlineMode, { OnlineModeActionType, OnlineModeState } from './onlineMode';
import authenticated, { AuthenticatedActionType, AuthenticatedState } from './authenticated';

export type ActionType = AuthenticatedActionType | OnlineActionType | OnlineModeActionType;

export interface State {
  authenticated: AuthenticatedState;
  online: OnlineState;
  onlineMode: OnlineModeState;
}

export default combineReducers({
  authenticated,
  online,
  onlineMode,
});
