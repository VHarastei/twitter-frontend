import { TagsState } from './ducks/tags/contracts/store';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TweetsState } from './ducks/tweets/contracts/store';
import { rootReducer } from './RootReducer';
import { rootSaga } from './saga';
import { TweetState } from './ducks/tweet/contracts/store';

export interface RootState {
  tweets: TweetsState;
  tweet: TweetState;
  tags: TagsState;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  //@ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

//window.store = store;

export default store;
