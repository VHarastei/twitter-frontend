import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from './../../../services/api/tweetsApi';
import {
  addTweet,
  FetchAddTweetActionInterface,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
  TweetsActionsType
} from './actionCreators';
import { AddFormState, LoadingState, Tweet, TweetsState } from './contracts/store';

export function* fetchTweetsRequest() {
  try {
    const items: TweetsState['items'] = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (err) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}
export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'VHarastei',
        username: 'vh',
        avatarUrl: 'https://source.unsplash.com/random/100x100?1',
      },
    };
    const item: Tweet = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (err) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
