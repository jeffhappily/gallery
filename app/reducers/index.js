import { combineReducers } from 'redux';
import images from './images';
import auth from './auth';
import nav from './nav';

const rootReducer = combineReducers({
  images,
  auth,
  nav
})

export default rootReducer;
