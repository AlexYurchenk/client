// import { createSelector } from "@reduxjs/toolkit";

export const getProfile = (state) => state.profile.items;
export const getLoading = (state) => state.profile.isLoading;
export const getError = (state) => state.profile.error;
export const getFilter = (state) => state.profile.filter;
