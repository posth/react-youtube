import { combineReducers } from 'redux';
import { getPublic } from './publicRooms';

console.log(getPublic, 'import please')

export const rootReducer = combineReducers(() => {
  getPublic: getPublic
 });

// export default rootReducer;
