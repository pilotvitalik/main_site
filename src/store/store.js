import { createStore, applyMiddleware } from 'redux';
import { defVal } from './middleware/defaultVal';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const middlewareEnchancer = applyMiddleware(defVal);

const composedEnchancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, middlewareEnchancer);

export default store;