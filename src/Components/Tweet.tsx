import { Avatar, Box, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  tweetWrapper: {
    color: 'inherit',
    textDecoration: 'none',
  },
  tweet: {
    display: 'flex',
    flexDirection: 'row',
    borderRight: 0,
    borderTop: 0,
    borderLeft: 0,
    padding: '15px 20px',
    '&:hover': { backgroundColor: 'rgb(245,248,250)' },
    cursor: 'pointer',
  },
  tweetAvatar: {
    width: 48,
    height: 48,
  },
  tweetBody: {
    margin: '0 10px',
  },
  tweetUserLink: {
    color: 'grey',
    marginLeft: 6,
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

type PropsType = {
  _id: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
};

export const Tweet: React.FC<PropsType> = ({ _id, user, text }) => {
  const classes = useStyles();

  return (
    <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
      <Paper variant="outlined" square className={classes.tweet}>
        <Box>
          <Avatar className={classes.tweetAvatar} src={user.avatarUrl} />
        </Box>
        <Box>
          <div className={classes.tweetBody}>
            <span>
              <b>{user.fullname}</b>
            </span>
            <span className={classes.tweetUserLink}>@{user.username}</span>
            <span className={classes.tweetUserLink}>·</span>
            <span className={classes.tweetUserLink}>1 ч</span>
            <div>
              <Typography variant="body1">{text}</Typography>
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
        </Box>
      </Paper>
    </Link>
  );
};
