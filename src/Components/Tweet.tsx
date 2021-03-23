import { Avatar, Box, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  tweet: {
    display: 'flex',
    flexDirection: 'row',
    borderRight: 0,
    borderLeft: 0,
    padding: 10,
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
  actionButton: {
    padding: 6,
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
  user: {
    fullname: string;
    username: string;
    avatarSrc: string;
  };
  text: string;
};

export const Tweet: React.FC<PropsType> = ({ user, text }) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square className={classes.tweet}>
      <Box>
        <Avatar className={classes.tweetAvatar} src={user.avatarSrc}/>
      </Box>
      <Box>
        <Box className={classes.tweetBody}>
          <span>
            <b>{user.fullname}</b>
          </span>
          <span className={classes.tweetUserLink}>@{user.username}</span>
          <span className={classes.tweetUserLink}>·</span>
          <span className={classes.tweetUserLink}>1 ч</span>
          <div>
            <Typography variant="body1">{text}</Typography>
            <div className={classes.actionButtons}>
              <div>
                <IconButton className={classes.actionButton}>
                  <CommentIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div>
                <IconButton className={classes.actionButton}>
                  <RepeatIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div>
                <IconButton className={classes.actionButton}>
                  <LikeIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
              <div>
                <IconButton className={classes.actionButton}>
                  <ReplyIcon />
                </IconButton>
                <span className={classes.actionNum}>1</span>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Paper>
  );
};
