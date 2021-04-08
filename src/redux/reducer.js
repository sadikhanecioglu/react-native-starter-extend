import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import auth from '../modules/auth/AuthState';
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';

export default combineReducers({
  // ## Generator Reducers
  auth,
  gallery,
  app,
  calendar,
});
