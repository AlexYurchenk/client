import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchProfilesRequest,
  fetchProfilesSuccess,
  fetchProfilesError,
  addProfileRequest,
  addProfileSuccess,
  addProfileError,
  deleteProfileRequest,
  deleteProfileSuccess,
  deleteProfileError,
  filterProfile,
} from "./profile-actions";

const items = createReducer([], {
  [fetchProfilesSuccess]: (_, { payload }) => payload,
  [addProfileSuccess]: (state, { payload }) => [...state, payload],
  [deleteProfileSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchProfilesRequest]: () => true,
  [fetchProfilesSuccess]: () => false,
  [fetchProfilesError]: () => false,
  [addProfileRequest]: () => true,
  [addProfileSuccess]: () => false,
  [addProfileError]: () => false,
  [deleteProfileRequest]: () => true,
  [deleteProfileSuccess]: () => false,
  [deleteProfileError]: () => false,
});

const filter = createReducer("", {
  [filterProfile]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchProfilesError]: setError,
  [addProfileError]: setError,
  [deleteProfileError]: setError,
  [fetchProfilesRequest]: () => null,
  [addProfileRequest]: () => null,
  [deleteProfileRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
