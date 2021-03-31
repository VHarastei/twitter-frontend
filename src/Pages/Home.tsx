import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { AddTweetForm } from '../Components/AddTweetForm';
import { BackButton } from '../Components/BackButton';
import { FullScreenTweet } from '../Components/FullScreenTweet';
import { RightSideBlock } from '../Components/RightSideBlock';
import { SideMenu } from '../Components/SideMenu';
import { Tweet } from '../Components/Tweet';
import { fetchTags } from '../store/ducks/tags/actionCreators';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';

const useStyles = makeStyles((theme) => ({
  homeWrapper: { height: '100vh' },
  contentWrapper: {
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  contentHeader: {
    borderRight: 0,
    borderLeft: 0,
    backgroundColor: 'white',
    top: 0,
    position: 'sticky',
    zIndex: 101,
    display: 'flex',
    alignItems: 'center',
  },
  contentHeaderText: {
    fontWeight: 800,
    padding: '10px 20px',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#f7f9fa',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
    zIndex: 101,
  },
  tweetsLoading: {
    textAlign: 'center',
    marginTop: 30,
  },
}));

export const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className={classes.homeWrapper}>
      <Container style={{ height: '100%' }}>
        <Grid container style={{ height: '100%' }}>
          <Grid item xs={3}>
            <SideMenu />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.contentWrapper} variant="outlined" square>
              <Paper variant="outlined" square className={classes.contentHeader}>
                <Route path="/home/:any">
                  <BackButton />
                </Route>
                <Route path={['/home', '/home/search']} exact>
                  <Typography variant="h5" className={classes.contentHeaderText}>
                    Твиты
                  </Typography>
                </Route>
                <Route path="/home/tweet">
                  <Typography variant="h5" className={classes.contentHeaderText}>
                    Твитнуть
                  </Typography>
                </Route>
              </Paper>
              <Route path="/home/tweet/:id">
                <FullScreenTweet />
              </Route>
              <Route path={['/home', '/home/search']} exact>
                <Paper>
                  <AddTweetForm />
                  <div className={classes.addFormBottomLine} />
                </Paper>
              </Route>
              <Route path="/home" exact>
                {isLoading ? (
                  <div className={classes.tweetsLoading}>
                    <CircularProgress color={'primary'} thickness={5} />
                  </div>
                ) : (
                  tweets.map((tweet) => {
                    return <Tweet key={tweet._id} {...tweet} />;
                  })
                )}
              </Route>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <RightSideBlock />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
