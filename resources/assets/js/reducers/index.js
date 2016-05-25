import { combineReducers } from 'redux';
import users from './users';
import speakers from './speakers';

const rootReducer = combineReducers({
	users,
	speakers
});

export default rootReducer;