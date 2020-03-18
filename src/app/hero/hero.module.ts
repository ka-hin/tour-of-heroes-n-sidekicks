import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroComponent } from './hero.component';
import { FormsModule } from '@angular/forms';
import { HeroRoutingModule } from './hero-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers: [
    HeroService
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule {

  public static forRoot() {
    return {
      ngModule: HeroModule,
      providers: []
    };
  }
}
