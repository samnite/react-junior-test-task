import { SET_ALERT, SET_AUTHENTICATED, SET_NEWS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  news: null,
  alert: null,
  isAuth: false,
};

export default createReducer(initialState, {
  [SET_NEWS]: (state, { payload }) => {
    return {
      ...state,
      news: payload,
      alert: null,
    };
  },
  [SET_ALERT]: (state, { payload }) => {
    return {
      ...state,
      alert: payload,
    };
  },
  [SET_AUTHENTICATED]: state => {
    return {
      ...state,
      alert: null,
      isAuth: true,
    };
  },
});
