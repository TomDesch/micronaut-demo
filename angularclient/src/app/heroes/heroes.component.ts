import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../const/mock-heroes';
import {Hero} from '../interface/hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

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
export class HeroesComponent {
  public heroes: Hero[] = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
