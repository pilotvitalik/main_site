import { createStore, applyMiddleware} from 'redux';
import thubkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const composedEnchancer = composeWithDevTools(applyMiddleware(thubkMiddleware));

const store = createStore(rootReducer, composedEnchancer);

export default store;