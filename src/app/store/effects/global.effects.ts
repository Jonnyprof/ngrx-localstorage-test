import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadGlobalsFailure, LoadGlobalsSuccess, GlobalActionTypes, GlobalActions } from '../actions/global.actions';



@Injectable()
export class GlobalEffects {

  @Effect()
  loadGlobals$ = this.actions$.pipe(
    ofType(GlobalActionTypes.LoadGlobals),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => new LoadGlobalsSuccess({ data })),
        catchError(error => of(new LoadGlobalsFailure({ error }))))
    )
  );


  constructor(private actions$: Actions<GlobalActions>) {}

}
