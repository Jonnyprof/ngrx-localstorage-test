import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromThings from './thing.reducer';

export interface State {
  things: fromThings.State;
}

export const reducers: ActionReducerMap<State> = {
  things: fromThings.reducer,
};

export const getFeature2State = createFeatureSelector<State>('feature2');

export const getThingsState = createSelector(getFeature2State, (state: State) => state.things);
export const getThingsData = createSelector(getThingsState, fromThings.getThingsData);
export const getThingsDataLoading = createSelector(getThingsState, fromThings.getThingsDataLoading);
