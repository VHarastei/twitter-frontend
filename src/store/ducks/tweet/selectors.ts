import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from './contracts/store';
export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetData = createSelector(selectTweet, (tweet) => tweet.data);

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;
export const selectIsTweetLoading = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADED;
