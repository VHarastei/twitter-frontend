import { createSelector } from 'reselect';
import { RootState } from './../../store';
import { LoadingState } from './contracts/store';
export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);

export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState;
export const selectIsTweetsLoading = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADED;
