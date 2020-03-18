import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroModule } from './hero/hero.module';
import { SidekickModule } from './sidekick/sidekick.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  // { path: '', component: AppComponent},
  { 
    path: 'hero',
    loadChildren: () => HeroModule 
  },
  {
    path: 'sidekick',
    loadChildren: () => SidekickModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }