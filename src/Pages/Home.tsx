import {
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { AddTweetForm } from '../Components/AddTweetForm';
import { SideMenu } from '../Components/SideMenu';
import { Tweet } from '../Components/Tweet';

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    height: '100vh',
  },
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
  },
  contentHeaderText: {
    fontWeight: 800,
    padding: '10px 20px',
  },
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

  addFormBottomLine: {
    height: 12,
    backgroundColor: '#f7f9fa',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
    zIndex: 101,
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

const SearchTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#e6ecf0',
      borderRadius: 28,
      padding: 0,
      paddingLeft: 15,
      '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.primary.main,
          //borderColor: 'transparent',
        },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);

export const Home = () => {
  const classes = useStyles();

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
                <Typography variant="h5" className={classes.contentHeaderText}>
                  Главная
                </Typography>
              </Paper>
              <Paper>
                <AddTweetForm/>
                <div className={classes.addFormBottomLine} />
              </Paper>
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
              <Tweet
                text={
                  'The ancient Romans sacrificed a Dogecoin at the beginning of the Doge Days to appease the rage of Sirius, believing that the star was the cause of the hot, sultry weather.'
                }
                user={{
                  fullname: 'Elon Musk',
                  username: 'elonmusk',
                  avatarSrc: '',
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <SearchTextField
                variant="outlined"
                placeholder="Поиск по твиттеру"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
