import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.css']
})
export class SidekickComponent implements OnInit {
  title = 'Tour of Sidekicks';
  constructor() { }

  ngOnInit(): void {
  }

}