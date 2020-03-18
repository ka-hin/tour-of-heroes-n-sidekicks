import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Sidekick } from '../model/sidekick';
import { SidekickService } from '../services/sidekick.service';

@Component({
  selector: 'app-sidekick-details',
  templateUrl: './sidekick-details.component.html',
  styleUrls: ['./sidekick-details.component.css']
})
export class SidekickDetailsComponent implements OnInit {

  sidekick : Sidekick;

  constructor(
    private sidekickService:SidekickService,
    private route: ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit(): void {
    this.getSidekick();
  }

  getSidekick():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.sidekickService.getSidekick(id)
        .subscribe(x=> this.sidekick = x);
  }

  delSidekick():void{
    this.sidekickService.deleteSidekick(this.sidekick);
    this.sidekick= null;
    this.location.back();
  }

  goBack():void{
    this.location.back();
  }

}
