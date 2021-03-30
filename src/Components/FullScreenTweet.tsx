import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreators';
import {
  selectIsTweetLoaded,
  selectIsTweetLoading,
  selectTweetData,
} from '../store/ducks/tweet/selectors';
import { Tweet } from './Tweet';

export const FullScreenTweet: React.FC = (): React.ReactElement | null => {
  const params: { id: string } = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(fetchTweetData(id));
    return () => {
      dispatch(setTweetData(undefined))
    }
  }, [dispatch, id]);

  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);

  if (tweetData) {
    return <Tweet {...tweetData} />;
  }
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <CircularProgress color={'primary'} thickness={5} />
      </div>
    );
  }

  return null;
};
