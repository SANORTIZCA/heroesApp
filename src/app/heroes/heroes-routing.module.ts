import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    /* loadchildren para lazyload */
    // Como este modulo ya es cargado con lazyload, entonces no es necesario cargas las hijas con lazyload, a menos de que sea un módulo muy grande
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
