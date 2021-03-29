import { tagsReducer } from './ducks/tags/reducer';
import { combineReducers } from 'redux';
import { tweetsReducer } from './ducks/tweets/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
});
