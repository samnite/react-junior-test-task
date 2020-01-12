import axios from 'axios';
import { SET_ALERT, SET_AUTHENTICATED, SET_NEWS } from '../types';

export const setAlert = alert => {
  return {
    type: SET_ALERT,
    payload: alert,
  };
};

export const logIn = (username, password, history) => dispatch => {
  if (username === 'Admin' && password === '12345') {
    dispatch({ type: SET_AUTHENTICATED });
    localStorage.setItem('isAuthenticated', 'true');
    history.push('/');
  } else {
    dispatch({ type: SET_ALERT, payload: 'Incorrect username or password.' });
  }
};

export const setAuth = () => dispatch => {
  dispatch({ type: SET_AUTHENTICATED });
};

export const getNews = () => dispatch => {
  const apiKey = '02be15d7f66a4ecf8516baec74fbc250';
  const link = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  axios
    .get(link)
    .then(res => {
      dispatch({ type: SET_NEWS, payload: res.data.articles });
    })
    .catch(err => {
      dispatch({ type: SET_ALERT, payload: err.message });
    });
};
