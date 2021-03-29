import { TagsApi } from './../../../services/api/tagsApi';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreators';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LoadingState, TagsState } from './contracts/store';

export function* fetchTagsRequest() {
  try {
    const items: TagsState['items'] = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (err) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
