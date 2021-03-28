import { TweetsApi } from './../../../services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from "./actionCreators"
import { call, put, takeLatest } from 'redux-saga/effects'
import { LoadingState, TweetsState } from './contracts/store';

export function* fetchTweetsRequest() {
  try {
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch(err) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}