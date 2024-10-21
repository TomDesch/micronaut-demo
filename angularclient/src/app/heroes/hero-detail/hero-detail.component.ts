import {Component, input} from '@angular/core';
import {Hero} from '../../interface/hero';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  hero = input<Hero>();

}
