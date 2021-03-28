import { all } from '@redux-saga/core/effects';
import { tweetsSaga } from './ducks/tweets/sagas';

export function* rootSaga() {
  yield all([tweetsSaga()]);
}
