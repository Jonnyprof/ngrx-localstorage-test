import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  LoadGlobals = '[Global] Load Globals',
  LoadGlobalsSuccess = '[Global] Load Globals Success',
  LoadGlobalsFailure = '[Global] Load Globals Failure',
}

export class LoadGlobals implements Action {
  readonly type = GlobalActionTypes.LoadGlobals;
}

export class LoadGlobalsSuccess implements Action {
  readonly type = GlobalActionTypes.LoadGlobalsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadGlobalsFailure implements Action {
  readonly type = GlobalActionTypes.LoadGlobalsFailure;
  constructor(public payload: { error: any }) { }
}

export type GlobalActions = LoadGlobals | LoadGlobalsSuccess | LoadGlobalsFailure;

