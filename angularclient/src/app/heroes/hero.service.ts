import {inject, Injectable} from '@angular/core';
import {HEROES} from '../const/mock-heroes';
import {Hero} from '../interface/hero';
import {Observable, of} from 'rxjs';
import {MessageService} from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public messageService: MessageService = inject(MessageService);

  constructor() { }

  public getHeroes(): Observable<Hero[]> {
    const heroes: Observable<Hero[]> = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
