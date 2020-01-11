import { CLEAR_PROJECT, GET_PROJECT, SET_ALERT, SET_MAIN_PAGE } from '../types';
import { createReducer } from '../redux';

const initialState = {
  project: null,
  alert: null,
  isMain: true,
};

export default createReducer(initialState, {
  [GET_PROJECT]: (state, { payload }) => {
    return {
      ...state,
      project: payload,
      alert: null,
    };
  },
  [SET_MAIN_PAGE]: (state, { payload }) => {
    return {
      ...state,
      isMain: payload,
      alert: null,
    };
  },
  [SET_ALERT]: (state, { payload }) => {
    return {
      ...state,
      alert: payload,
    };
  },

  [CLEAR_PROJECT]: state => {
    return {
      ...state,
      project: null,
    };
  },
});
