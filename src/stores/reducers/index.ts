import { combineReducers } from 'redux';

import userReducer from './userReducer';


const allReducers = combineReducers({

	user:userReducer,


});
export type RootState = ReturnType<typeof allReducers>;


export default allReducers;



