import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidekickRoutingModule } from './sidekick-routing.module';
import { SidekickService } from './services/sidekick.service';
import { SidekickComponent } from './sidekick.component';
import { SidekicksComponent } from './sidekicks/sidekicks.component';
import { SidekickDetailsComponent } from './sidekick-details/sidekick-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidekickComponent,
    SidekicksComponent,
    SidekickDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SidekickRoutingModule
  ],
  providers: [
    SidekickService
  ],
  exports: [
    SidekickComponent
  ]
})
export class SidekickModule { 

  public static forRoot(){
    return{
      ngModule: SidekickModule,
      providers:[]
    }
  }
}
