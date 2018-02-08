import { createStore } from 'redux';
import rootReducer from './reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
