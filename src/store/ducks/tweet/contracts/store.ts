import { Tweet } from './../../tweets/contracts/store';
export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface TweetState {
  data?: Tweet
  loadingState: LoadingState
}