import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: 'src/app/feature1/feature1.module#Feature1Module'
  },
  {
    path: 'feature2',
    loadChildren: 'src/app/feature2/feature2.module#Feature2Module'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
