import {
  Avatar,
  Button,
  Divider,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { SearchTextField } from './SearchTextField';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
    marginLeft: 30
  },
  rightSideBlock: {
    backgroundColor: '#f5f8fa',
    borderRadius: 15,
    marginTop: 20,
    '& MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
}));

export const RightSideBlock = () => {
  const classes = useStyles();

  return (
    <div className={classes.rightSide}>
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
        fullWidth
      />
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader}>
          <b>Актуальные темы</b>
        </Paper>
        
        <List>
        <Divider component="li" />
          <ListItem className={classes.rightSideBlockItem}>
            <ListItemText
              primary="Musk"
              secondary={
                <Typography component="span" variant="body2">
                  3 333
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem className={classes.rightSideBlockItem}>
            <ListItemText
              primary="Biba"
              secondary={
                <Typography component="span" variant="body2">
                 1 488
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
      <Paper className={classes.rightSideBlock}>
        <Paper className={classes.rightSideBlockHeader}>
          <b>Кого читать</b>
        </Paper>
        
        <List>
        <Divider component="li" />
          <ListItem className={classes.rightSideBlockItem}>
            <ListItemAvatar>
              <Avatar src="https://source.unsplash.com/random/100x100" />
            </ListItemAvatar>
            <ListItemText
              primary="Elon Musk"
              secondary={
                <Typography component="span" variant="body2">
                  @elonmusk
                </Typography>
              }
            />
            <Button color="primary" variant='outlined'>Читать</Button>
          </ListItem>
          <Divider component="li" />
        </List>
      </Paper>
    </div>
  );
};
