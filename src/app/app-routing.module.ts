import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(pages => pages.PagesModule)
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
