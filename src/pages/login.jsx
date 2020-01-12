import React, { useState } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { logIn } from '../store/actions/data-actions';

const styles = theme => ({
  ...theme.custom,
});

const Login = ({ classes, history, logIn, alert }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    logIn(login, password, history);
  };

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <Typography variant="h3" className={classes.pageTitle}>
          Login
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="login"
            name="login"
            type="login"
            label="Login"
            className={classes.textField}
            value={login}
            onChange={e => setLogin(e.target.value)}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            className={classes.textField}
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
          />
          {alert && (
            <Typography variant="body2" className={classes.customError}>
              {alert}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Login
          </Button>
          <br />
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

Login.defaultProps = {
  alert: null,
};

Login.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  alert: PropTypes.string,
};

const mapStateToProps = state => ({
  alert: state.data.alert,
});

export default connect(mapStateToProps, { logIn })(withStyles(styles)(Login));
