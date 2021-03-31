import { createSelector } from 'reselect';
import { RootState } from './../../store';
import { AddFormState, LoadingState } from './contracts/store';
export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;
export const selectAddFormState = (state: RootState): AddFormState => selectTweets(state).addFormState;
export const selectIsTweetsLoading = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADED;
