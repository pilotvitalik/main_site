import { combineReducers } from 'redux';

import changeHeight from './updateHeight';

const rootReducer = combineReducers({
	updHeight: changeHeight,
})

export default rootReducer;