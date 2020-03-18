import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Sidekick } from '../model/sidekick';
import { SIDEKICKS } from 'src/app/mock-sidekicks';

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  constructor() { }

  getSidekicks():Observable<Sidekick[]>{
    return of(SIDEKICKS);
  }

  getSidekick(id:number): Observable<Sidekick>{
    return of(SIDEKICKS.find(x => x.id ===id))
  }

  addSidekick(x:Sidekick):void{
    SIDEKICKS.push(x);
  }

  deleteSidekick(x:Sidekick):void{
    SIDEKICKS.splice(SIDEKICKS.indexOf(x),1);
  }
}
