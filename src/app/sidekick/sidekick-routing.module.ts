import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidekicksComponent } from './sidekicks/sidekicks.component';
import { SidekickDetailsComponent } from './sidekick-details/sidekick-details.component';
import { SidekickComponent } from './sidekick.component';


const routes: Routes = [
  {path:'' , 
  component: SidekickComponent,
  children: [
    {
      path: 'mysidekicks',
      component: SidekicksComponent
    },
    {
      path: 'mysidekicks/details/:id',
      component: SidekickDetailsComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidekickRoutingModule { }
