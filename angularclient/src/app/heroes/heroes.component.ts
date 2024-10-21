import {Component} from '@angular/core';
import {NgForOf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../const/mock-heroes';
import {Hero} from '../interface/hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgForOf
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