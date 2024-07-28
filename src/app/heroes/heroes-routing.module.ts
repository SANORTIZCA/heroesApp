import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    /* loadchildren para lazyload */
    // Como este modulo ya es cargado con lazyload, entonces no es necesario cargas las hijas con lazyload, a menos de que sea un módulo muy grande
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search',component: SearchPageComponent },
      { path:  'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      /* :id es un comodin, es importante su posición, debería ir de último */
      { path: ':id', component: HeroPageComponent},
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
