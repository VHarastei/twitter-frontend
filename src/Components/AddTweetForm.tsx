import { Avatar, CircularProgress, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { ImageOutlined } from '@material-ui/icons';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { AddFormState } from '../store/ducks/tweets/contracts/store';
import { selectAddFormState } from '../store/ducks/tweets/selectors';

const useStyles = makeStyles((theme) => ({
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 48,
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: '70',
  },
  addFormAvatar: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  addFormTextArea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const AddTweetForm: React.FC = () => {
  const MAX_LENGTH = 280;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const percentTextLength = Math.round((text.length / MAX_LENGTH) * 100);
  const textCount = MAX_LENGTH - text.length;
  const addFormState = useSelector(selectAddFormState);
  const handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };
  const handleTweetClick = (): void => {
    dispatch(fetchAddTweet(text));
    setText('');
  };

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar className={classes.addFormAvatar} />
        <TextareaAutosize
          placeholder="Что происходит?"
          className={classes.addFormTextArea}
          value={text}
          onChange={handleTextChange}
          rowsMax={20}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classes.addFormBottomActions}>
          <IconButton color="primary" style={{ padding: 6 }}>
            <ImageOutlined style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary" style={{ padding: 6 }}>
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  thickness={5}
                  variant="static"
                  size={20}
                  value={text.length >= MAX_LENGTH ? 100 : percentTextLength}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  variant="static"
                  size={20}
                  style={{ color: 'rgba(0,0,0,0.1)' }}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            color="primary"
            variant="contained"
            disabled={!text || text.length >= MAX_LENGTH}
            onClick={handleTweetClick}
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              'Твитнуть'
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">Ошибка при добавлении твита</Alert>
      )}
    </div>
  );
};
