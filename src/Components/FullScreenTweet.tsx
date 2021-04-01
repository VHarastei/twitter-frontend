import {
  Avatar,
  CircularProgress,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../store/ducks/tweet/selectors';

const useStyles = makeStyles((theme) => ({
  tweetWrapper: {
    color: 'inherit',
    textDecoration: 'none',
  },
  tweet: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: 0,
    borderTop: 0,
    borderLeft: 0,
    padding: '15px 20px',
    '&:hover': { backgroundColor: 'rgb(245,248,250)' },
    cursor: 'pointer',
  },
  tweetHeader: {
    display: 'flex',
  },
  tweetAvatar: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  tweetUserLink: {
    color: 'grey',
  },
  tweetText: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 1.3,
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: -6,
  },
  actionButtonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  actionButton: {
    padding: 6,
    paddingBottom: 0,
    '& svg': {
      fontSize: 20,
    },
    '&:hover': { color: '#1da1f2' },
  },
  actionNum: {
    color: 'grey',
    marginLeft: 6,
    fontSize: 12,
  },
}));

export const FullScreenTweet: React.FC = (): React.ReactElement | null => {
  const classes = useStyles();

  const params: { id: string } = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(fetchTweetData(id));
    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <CircularProgress color={'primary'} thickness={5} />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper variant="outlined" square className={classes.tweet}>
        <div className={classes.tweetHeader}>
          <Avatar className={classes.tweetAvatar} src={tweetData.user.avatarUrl} />
          <div>
            <div>
              <b>{tweetData.user.fullname}</b>
            </div>
            <div className={classes.tweetUserLink}>@{tweetData.user.username}</div>
          </div>
        </div>
        <div>
          <div>
            <Typography variant="body1" className={classes.tweetText}>
              {tweetData.text}
            </Typography>
            <div className={classes.actionButtons}>
              <div className={classes.actionButtonContainer}>
                <IconButton className={classes.actionButton}>
                  <CommentIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div className={classes.actionButtonContainer}>
                <IconButton className={classes.actionButton}>
                  <RepeatIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div className={classes.actionButtonContainer}>
                <IconButton className={classes.actionButton}>
                  <LikeIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div className={classes.actionButtonContainer}>
                <IconButton className={classes.actionButton}>
                  <ReplyIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
  return null;
};
