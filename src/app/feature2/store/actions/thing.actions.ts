import { Action } from '@ngrx/store';

export enum ThingActionTypes {
  LoadThings = '[Thing] Load Things',
  LoadThingsSuccess = '[Thing] Load Things Success',
  LoadThingsFailure = '[Thing] Load Things Failure',
}

export class LoadThings implements Action {
  readonly type = ThingActionTypes.LoadThings;
}

export class LoadThingsSuccess implements Action {
  readonly type = ThingActionTypes.LoadThingsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadThingsFailure implements Action {
  readonly type = ThingActionTypes.LoadThingsFailure;
  constructor(public payload: { error: any }) { }
}

export type ThingActions = LoadThings | LoadThingsSuccess | LoadThingsFailure;

