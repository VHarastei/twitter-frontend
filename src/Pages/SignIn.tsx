import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useState } from 'react';
import { SignDialog } from '../Components/SignDialog';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  leftSide: {
    display: 'flex',
    flex: '0 0 50%',
    backgroundColor: '#1da1f2',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigTwitterIcon: {
    color: 'white',
    fontSize: 450,
  },
  rightSide: {
    flex: '0 0 50%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: 600,
    marginLeft: 30,
  },
  infoTitle: {
    fontWeight: 700,
  },
  twitterIcon: {
    color: '#1da1f2',
    fontSize: 45,
    marginBottom: 55,
  },
  buttonBox: {
    width: 380,
  },
}));

export function SignIn() {
  const classes = useStyles();
  const [visible, setVisible] = useState<'signIn' | 'signUp'>();
  console.log(visible);
  const handlOpenSignInDialog = () => {
    setVisible('signIn');
  };
  const handlOpenSignUpDialog = (): void => {
    setVisible('signUp');
  };
  const handleCloseDialog = (): void => {
    setVisible(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftSide}>
        <TwitterIcon className={classes.bigTwitterIcon} />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.info}>
          <TwitterIcon className={classes.twitterIcon} />
          <Typography className={classes.infoTitle} variant="h2" gutterBottom>
            В курсе происходящего
          </Typography>
          <Typography className={classes.infoTitle} variant="h4" gutterBottom>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Box className={classes.buttonBox} mt={2}>
            <Button color="primary" variant="contained" fullWidth onClick={handlOpenSignUpDialog}>
              Зарегистрироваться
            </Button>
            <Box mt={2}></Box> 
            <Button color="primary" variant="outlined" fullWidth onClick={handlOpenSignInDialog}>
              Войти
            </Button>
          </Box>
          <SignDialog
            title={'Войти в Твиттер'}
            visible={visible === 'signIn'}
            handleCloseDialog={handleCloseDialog}
          >
            <div>
              <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                label="Password"
                type="Password"
                fullWidth
              />
              <Box mt={2}></Box>
              <Button
                autoFocus
                onClick={handleCloseDialog}
                color="primary"
                variant="contained"
                fullWidth
              >
                Войти
              </Button>
            </div>
          </SignDialog>
          <SignDialog
            title={'Создайте учетную запись'}
            visible={visible === 'signUp'}
            handleCloseDialog={handleCloseDialog}
          >
            <div>
              <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                label="Name"
                type="text"
                fullWidth
              />
              <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
              />
              <Box mt={2}></Box>
              <Button
                autoFocus
                onClick={handleCloseDialog}
                color="primary"
                variant="contained"
                fullWidth
              >
                Далее
              </Button>
            </div>
          </SignDialog>
        </div>
      </div>
    </div>
  );
}
