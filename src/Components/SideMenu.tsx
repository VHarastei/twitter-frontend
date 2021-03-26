import {
  Button,
  Container,
  createStyles,
  Grid,
  Hidden,
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
import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import { Tweet } from '../Components/Tweet';
import { AddTweetForm } from './AddTweetForm';
import { DialogBlock } from './DialogBlock';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    position: 'sticky',
    top: 0,
    maxWidth: 230,
    marginRight: 30,
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
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
    // maxWidth: 0
  },
}));

export const SideMenu = () => {
  const classes = useStyles();

  const [visibleDialog, setVisibleDialog] = React.useState<boolean>(false);
  const onClickOpenDialog = (): void => {
    setVisibleDialog(true);
  };
  const handleCloseDialog = (): void => {
    setVisibleDialog(false);
  };
  return (
    <Paper className={classes.sidebar}>
      <div className={classes.sidebarItem}>
        <IconButton color="primary">
          <TwitterIcon fontSize="large" />
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <SearchIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>Поиск</Typography>
          </Hidden>
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <NotificationsIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>Уведомления</Typography>
          </Hidden>
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <EmailIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>Сообщения</Typography>
          </Hidden>
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <ListIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>Списки</Typography>
          </Hidden>
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <EmailAltIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>На связи</Typography>
          </Hidden>
        </IconButton>
      </div>
      <div className={classes.sidebarItem}>
        <IconButton className={classes.sidebarItemIcon}>
          <PersonIcon />
          <Hidden smDown>
            <Typography className={classes.sidebarItemText}>Профиль</Typography>
          </Hidden>
        </IconButton>
      </div>
      <Button
        className={classes.sidebarTweetBtn}
        color="primary"
        variant="contained"
        fullWidth
        onClick={onClickOpenDialog}
      >
        <Hidden smDown>Твитнуть</Hidden>
        <Hidden mdUp>
          <CreateIcon />
        </Hidden>
      </Button>

      <DialogBlock title={''} visible={visibleDialog} handleCloseDialog={handleCloseDialog}>
        <AddTweetForm />
      </DialogBlock>
    </Paper>
  );
};
