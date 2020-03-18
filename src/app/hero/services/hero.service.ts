import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { Hero } from '../model/hero';
import { HEROES } from 'src/app/mock-heroes';

@Injectable()
export class HeroService implements OnDestroy {

  private obs$: Subscription;
  constructor(private messageService: MessageService) { 

    this.obs$ = this.getHeroes().subscribe(x => {});
  }

  ngOnDestroy() {
    this.obs$.unsubscribe();
  }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id:number): Observable<Hero>{
    this.messageService.add(`Hero Service fetched Hero ID = ${id}`);
    return of(HEROES.find(hero=>hero.id === id))
  }

  deleteHero(x:Hero): void{
    HEROES.splice(HEROES.indexOf(x),1);
  }

  promiseSample = (resolve):Promise<any> => {
    return new Promise(resolve);
  }


  sample = async () => {
    this.getHeroes().subscribe(data => {
      data.forEach(hero => this.deleteHero(hero));
    }, (err) => {
      console.log(err);
    });

    this.promiseSample('').then(returnValue => {
      this.deleteHero(returnValue);
    }).catch(err => {
      console.log(err);
    });

    this.getHeroes();
  }
}
