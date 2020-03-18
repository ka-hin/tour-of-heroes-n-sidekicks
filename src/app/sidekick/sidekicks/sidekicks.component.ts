import { Component, OnInit } from '@angular/core';
import { Sidekick } from '../model/sidekick';
import { SidekickService } from '../services/sidekick.service';

@Component({
  selector: 'app-sidekicks',
  templateUrl: './sidekicks.component.html',
  styleUrls: ['./sidekicks.component.css']
})
export class SidekicksComponent implements OnInit {

  newSidekick : Sidekick = new Sidekick();
  sidekicks: Sidekick[];

  constructor(
    private sidekickService:SidekickService
  ) { }

  ngOnInit(): void {
    this.getSidekicks();
    //this.newSidekick.id = this.sidekicks[this.sidekicks.length-1].id+1;
  }

  getSidekicks():void{
    this.sidekickService.getSidekicks()
        .subscribe(x=> this.sidekicks = x);
  }

  addNewSidekick():void{

    const sideKick: Sidekick = {
      id: this.sidekicks.length + 1,
      name: this.newSidekick.name
    };
  
    this.sidekickService.addSidekick(sideKick);
    //this.newSidekick = new Sidekick();
  }

}
