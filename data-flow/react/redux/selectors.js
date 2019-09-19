import { createSelector } from 'reselect';

const getNameState = state => state.name;

export const getUserName = createSelector(
  getNameState,
  collection => collection.name
);
