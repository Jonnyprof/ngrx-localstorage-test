import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadThingsFailure, LoadThingsSuccess, ThingActionTypes, ThingActions } from '../actions/thing.actions';



@Injectable()
export class ThingEffects {

  @Effect()
  loadThings$ = this.actions$.pipe(
    ofType(ThingActionTypes.LoadThings),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => new LoadThingsSuccess({ data })),
        catchError(error => of(new LoadThingsFailure({ error }))))
    )
  );


  constructor(private actions$: Actions<ThingActions>) {}

}
