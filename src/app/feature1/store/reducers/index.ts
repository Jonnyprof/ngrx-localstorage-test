import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};

export const getFeature2State = createFeatureSelector<State>('feature1');

export const getUserState = createSelector(getFeature2State, (state: State) => state.user);
export const getUserData = createSelector(getUserState, fromUser.getProfile);
export const getUserDataLoading = createSelector(getUserState, fromUser.getProfileLoading);
