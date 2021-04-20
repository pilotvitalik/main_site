import { combineReducers } from 'redux';

import headerReducer from './headerSlice';

const rootReducer = combineReducers({
	header: headerReducer,
})

export default rootReducer;