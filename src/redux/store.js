import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import testReducer from './test/test.reducer';


export const rootReducer = combineReducers({
  test: testReducer,
});

const reduxDevToolsCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const shouldUseReduxDevTools = reduxDevToolsCompose;

const composeEnhancers = shouldUseReduxDevTools ? reduxDevToolsCompose : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware()),
);

export default store;
