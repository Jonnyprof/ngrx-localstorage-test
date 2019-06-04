import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromGlobal from './global.reducer';

export interface State {
  global: fromGlobal.State;
}

export const reducers: ActionReducerMap<State> = {
  global: fromGlobal.reducer,
};

export const getGlobalState = createFeatureSelector<State, fromGlobal.State>('global');

export const getGlobalData = createSelector(getGlobalState, fromGlobal.getGlobalData);
export const getGlobalDataLoading = createSelector(getGlobalState, fromGlobal.getGlobalDataLoading);
