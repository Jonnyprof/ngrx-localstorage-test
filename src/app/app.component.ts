import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  globalData$ = this.store.pipe(select(fromRoot.getGlobalData));
  private globalSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.globalSubscription = this.globalData$.subscribe(data => {
      console.log('receiving global data', data);
    });
  }

  ngOnDestroy(): void {
    this.globalSubscription.unsubscribe();
  }
}
