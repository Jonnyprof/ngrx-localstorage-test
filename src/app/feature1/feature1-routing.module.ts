import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature1Component } from 'src/app/feature1/feature1.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule {
}
