/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import online, { OnlineActionType, OnlineState } from './online';
import onlineMode, { OnlineModeActionType, OnlineModeState } from './onlineMode';

export type ActionType = OnlineActionType | OnlineModeActionType;

export interface State {
  online: OnlineState;
  onlineMode: OnlineModeState;
}

export default combineReducers({
  online,
  onlineMode,
});
