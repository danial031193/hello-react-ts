import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import allReducers from './reducers';
import SagaManager from './SagaManager';

const reduxDevTools = (window as any)?.__REDUX_DEVTOOLS_EXTENSION__?.() ?? compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store: Store = createStore(
    combineReducers({ ...allReducers }),
    compose(applyMiddleware(...middlewares), reduxDevTools),
  );

  const persistor = persistStore(store, null);

  sagaMiddleware.run(SagaManager);

  return { store, persistor };
};

export default configureStore;
