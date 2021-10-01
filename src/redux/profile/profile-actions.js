import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_PROFILES_REQUEST,
  FETCH_PROFILES_SUCCESS,
  FETCH_PROFILES_ERROR,
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  FILTER_PROFILE,
} from "./profiles-types";

export const fetchProfilesRequest = createAction(FETCH_PROFILES_REQUEST);
export const fetchProfilesSuccess = createAction(FETCH_PROFILES_SUCCESS);
export const fetchProfilesError = createAction(FETCH_PROFILES_ERROR);

export const addProfileRequest = createAction(ADD_PROFILE_REQUEST);
export const addProfileSuccess = createAction(ADD_PROFILE_SUCCESS);
export const addProfileError = createAction(ADD_PROFILE_ERROR);

export const deleteProfileRequest = createAction(DELETE_PROFILE_REQUEST);
export const deleteProfileSuccess = createAction(DELETE_PROFILE_SUCCESS);
export const deleteProfileError = createAction(DELETE_PROFILE_ERROR);

export const filterProfile = createAction(FILTER_PROFILE);
