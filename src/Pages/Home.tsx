import {
  Button,
  Container,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import EmailAltIcon from '@material-ui/icons/AlternateEmailOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import { Tweet } from '../Components/Tweet';

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    height: '100vh',
  },
  sidebar: {
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    marginBottom: 10,
  },
  sidebarItemText: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 12,
  },
  sidebarItemIcon: {
    borderRadius: 26,
    height: 42,
    color: 'black',
    '&:hover': { color: '#1da1f2' },
    '& svg': {
      fontSize: 28,
    },
  },
  sidebarTweetBtn: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    width: 230
  },
  contentWrapper: {
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  contentHeader: {
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
  },
  contentHeaderText: {
    fontWeight: 800,
    padding: '10px 16px',
  },

}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 28,
      backgroundColor: '#e6ecf0',
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper}>
      <Container style={{ height: '100%', width: 1280 }}>
        <Grid container style={{ height: '100%' }}>
          <Grid className={classes.sidebar} item xs={3}>
            <Paper>
              <div className={classes.sidebarItem}>
                <IconButton color="primary">
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <SearchIcon />
                  <Typography className={classes.sidebarItemText}>Поиск</Typography>
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <NotificationsIcon />
                  <Typography className={classes.sidebarItemText}>Уведомления</Typography>
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <EmailIcon />
                  <Typography className={classes.sidebarItemText}>Сообщения</Typography>
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <ListIcon />
                  <Typography className={classes.sidebarItemText}>Списки</Typography>
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <EmailAltIcon />
                  <Typography className={classes.sidebarItemText}>На связи</Typography>
                </IconButton>
              </div>
              <div className={classes.sidebarItem}>
                <IconButton className={classes.sidebarItemIcon}>
                  <PersonIcon />
                  <Typography className={classes.sidebarItemText}>Профиль</Typography>
                </IconButton>
              </div>
              <Button className={classes.sidebarTweetBtn} color="primary" variant="contained" fullWidth>Твитнуть</Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.contentWrapper} variant="outlined" square>
              <Paper variant="outlined" square className={classes.contentHeader}>
                <Typography variant="h5" className={classes.contentHeaderText}>
                  Главная
                </Typography>
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
              <SearchTextField />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
