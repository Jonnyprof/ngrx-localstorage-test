import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromFeature2 from './store/reducers';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit, OnDestroy {
  featureData$ = this.store.pipe(select(fromFeature2.getThingsData));
  private featureSubscription: Subscription;

  constructor(private store: Store<fromFeature2.State>) {
  }

  ngOnInit(): void {
    this.featureSubscription = this.featureData$.subscribe(data => {
      console.log('receiving feature2 data', data);
    });
  }

  ngOnDestroy(): void {
    this.featureSubscription.unsubscribe();
  }
}
