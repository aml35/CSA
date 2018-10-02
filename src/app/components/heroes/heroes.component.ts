import { Component, OnInit } from '@angular/core';
import Hero from '../../models/hero';
import { HeroService } from '../../services/hero/hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService: HeroService) {}
  selectedHero: Hero;
  heroes: Hero[];
  
   ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){ this.selectedHero = hero;}

}
