import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { reducers } from './store/reducers';
import { metaReducers } from './store/metareducers';

@NgModule({
  declarations: [
    Feature2Component
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('feature2', reducers, {metaReducers}),
    Feature2RoutingModule
  ]
})
export class Feature2Module {
}
