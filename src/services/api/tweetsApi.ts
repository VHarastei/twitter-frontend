import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/store';

export const TweetsApi = {
  fetchTweets: (): Promise<TweetsState['items']> => {
    return axios.get('/tweets').then(({ data }) => data);
  },
};
