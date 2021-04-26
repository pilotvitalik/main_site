import { combineReducers } from 'redux';
import headerReducer from './headerSlice';
import mainReducer from "./mainSlice";
import uploadReducer from "./uploadFiles";

const rootReducer = combineReducers({
	header: headerReducer,
	main: mainReducer,
	upload: uploadReducer,
})

export default rootReducer;