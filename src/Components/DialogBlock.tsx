import { Container } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      height: 15,
      display: 'flex',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: 0,
      top: theme.spacing(0.5),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: 0,
    width: 450,
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme: Theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

type PropsType = {
  title: string;
  visible: boolean;
  handleCloseDialog: () => void;
  children: React.ReactNode;
};

export const DialogBlock: React.FC<PropsType> = ({
  title,
  visible,
  handleCloseDialog,
  children,
}) => {
  return (
    <Container>
      <Dialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={visible}>
        <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </Container>
  );
};
