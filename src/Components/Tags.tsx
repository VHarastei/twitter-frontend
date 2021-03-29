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
  CircularProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsTagsLoading, selectTagsItems } from '../store/ducks/tags/selectors';
import { rightSideBlockStyles } from './RightSideBlock';
import { SearchTextField } from './SearchTextField';

type PropsType = {
  classes: ReturnType<typeof rightSideBlockStyles>;
};

export const Tags: React.FC<PropsType> = ({ classes }) => {
  const items = useSelector(selectTagsItems);
  const isLoading = useSelector(selectIsTagsLoading);

  if (isLoading) return <CircularProgress color={'primary'} thickness={5} />;
  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader}>
        <b>Актуальные темы</b>
      </Paper>
      <List>
        <Divider component="li" />
        {items.map((item) => {
          return (
            <Fragment key={item._id}>
              <ListItem className={classes.rightSideBlockItem}>
                <Link to={`/home/search?q=${item.name}`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: {item.count}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <Divider component="li" />
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
};
