import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', 
    component: HeroComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'myheroes',
            component: HeroesComponent
        },
        {
            path: 'detail/:id',
            component: HeroDetailComponent
        }
    ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }