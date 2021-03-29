import { all } from '@redux-saga/core/effects';
import { tagsSaga } from './ducks/tags/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';

export function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga()]);
}
