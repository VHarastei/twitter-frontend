import { TweetsApi } from '../../../services/api/tweetsApi';
import { FetchTweetDataActionInterface, setTweetData, setTweetLoadingState, TweetActionsType } from "./actionCreators"
import { call, put, takeLatest } from 'redux-saga/effects'
import { LoadingState, TweetState } from './contracts/store';
import { Tweet } from '../tweets/contracts/store';

export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const data: Tweet = yield call(TweetsApi.fetchTweetData, tweetId)
    yield put(setTweetData(data))
  } catch(err) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}