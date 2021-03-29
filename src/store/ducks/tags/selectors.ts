import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { LoadingState } from './contracts/store';
export const selectTags = (state: RootState) => state.tags;

export const selectTagsItems = createSelector(selectTags , (tags) => tags.items);

export const selectLoadingState = (state: RootState) => selectTags (state).loadingState;
export const selectIsTagsLoading = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootState) => selectLoadingState(state) === LoadingState.LOADED;
