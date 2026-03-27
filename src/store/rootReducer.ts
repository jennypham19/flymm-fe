import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '@/slices/auth';
import userReducer from '@/slices/user';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
