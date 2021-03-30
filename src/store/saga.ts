import { all } from '@redux-saga/core/effects';
import { tagsSaga } from './ducks/tags/sagas';
import { tweetSaga } from './ducks/tweet/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';

export function* rootSaga() {
  yield all([tweetsSaga(),tweetSaga(), tagsSaga()]);
}
