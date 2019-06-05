import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { reducers } from './store/reducers';
import { metaReducers } from './store/metareducers';

@NgModule({
  declarations: [
    Feature1Component
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('feature1', reducers, {metaReducers}),
    Feature1RoutingModule
  ]
})
export class Feature1Module {
}
