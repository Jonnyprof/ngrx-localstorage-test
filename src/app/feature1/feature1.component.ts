import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromFeature1 from './store/reducers';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss']
})
export class Feature1Component implements OnInit, OnDestroy {
  featureData$ = this.store.pipe(select(fromFeature1.getUserData));
  private featureSubscription: Subscription;

  constructor(private store: Store<fromFeature1.State>) {
  }

  ngOnInit(): void {
    this.featureSubscription = this.featureData$.subscribe(data => {
      console.log('receiving feature1 data', data);
    });
  }

  ngOnDestroy(): void {
    this.featureSubscription.unsubscribe();
  }
}
