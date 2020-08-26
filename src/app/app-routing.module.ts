import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: 'pages',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(pages => pages.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
