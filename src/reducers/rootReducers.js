import { combineReducers } from 'redux';
import { getPublic } from './publicRooms';

export const rootReducer = combineReducers(() => {
  getPublic: getPublic
 });
