import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TweetsState } from './ducks/tweets/contracts/store';
import { rootReducer } from './RootReducer';
import { rootSaga } from './saga';

export interface RootState {
  tweets: TweetsState
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  //@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

//window.store = store;

export default store;