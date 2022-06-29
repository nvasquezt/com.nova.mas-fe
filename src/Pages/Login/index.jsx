import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import useStyles from './useStyles'
import {SafetyCheck} from '@mui/icons-material'
import { HOME_ROUTE } from '../../Constants'
import { login } from '../../services/loginServices';

const Login = () => {
  const classes = useStyles();
  const [loginInfo, setLoginInfo] = useState({ userId: '', password: '' });

  const handleChange = (evt) =>{
    setLoginInfo({ ...loginInfo,[evt.target.name]: evt.target.value });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const loginProcess = await login(loginInfo);
    if(loginProcess.token){
      const { token } = loginProcess
      sessionStorage.setItem('token', token);
      window.location.href = HOME_ROUTE;
    }
    
  }

  if (sessionStorage.token) {
    return <h1>You are logged in</h1>;
  }
  return (
    <Grid component='main' className={classes.root}>
      <CssBaseline />
      <Grid component={Paper} className={classes.login}>
        <Typography component="h1" variant="h5" >
          AmbuFMS Login
        </Typography>
        <Avatar>
          <SafetyCheck />
        </Avatar>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
          required
          autoFocus
          label="User"
          color="primary"
          margin="normal"
          fullWidth
          name="userId"
          variant="filled"
          type="text"
          onChange={handleChange}
          />
          <TextField
          required
          autoFocus
          label="Password"
          color="primary"
          fullWidth
          name="password"
          variant="filled"
          type="password"
          onChange={handleChange}
          />
          <Button
            fullWidth
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Grid>

    </Grid>
  );
};

export default Login;
