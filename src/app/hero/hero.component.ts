import { Component, OnInit } from '@angular/core';


import { Hero } from '../hero';
// import { HEROES } from '../ mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


// export class HeroComponent implements OnInit {
//   constructor(private heroService: HeroService) { }

//   heroes: Hero[];


//   selectedHero: Hero;

//   getHeroes(): void {
//     // this.heroes = this.heroService.getHeroes(); Sync call not recommended
//     this.heroService.getHeroes()
//       .subscribe(heroes =>
//         this.heroes = heroes);
//   }
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

//   ngOnInit() {

//     this.getHeroes();
//   }

// }
export class HeroComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
