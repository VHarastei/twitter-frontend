import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/store';

export const TweetsApi = {
  fetchTweets: (): Promise<TweetsState['items']> => {
    return axios.get('https://trycode.pw/c/6Q8PP.json').then(({ data }) => data);
  },
};
