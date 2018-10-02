import { Component, OnInit } from '@angular/core';
import Hero from '../../models/hero';
import { HEROES }  from '../../models/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;

  onSelect(hero: Hero){ this.selectedHero = hero;}
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
    
  }

}
