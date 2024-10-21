import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Hero} from '../interface/hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {MessageService} from '../messages/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  private heroService: HeroService = inject(HeroService);
  private messageService: MessageService = inject(MessageService);

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((heroes: Hero[]): Hero[] => {
      return this.heroes = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
