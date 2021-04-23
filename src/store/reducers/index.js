import { combineReducers } from 'redux';
import headerReducer from './headerSlice';
import mainReducer from "./mainSlice";

const rootReducer = combineReducers({
	header: headerReducer,
	main: mainReducer,
})

export default rootReducer;