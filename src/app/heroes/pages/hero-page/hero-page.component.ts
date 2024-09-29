import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { HeroesService } from './../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    /* servicio propio del router */
    private activedRoute: ActivatedRoute,
    /* Necesario para sacar a la persona de la vista */
    private router: Router,

  ){}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        /* swithcMap permite tomar de los params el valor desestructurado */
        switchMap(({id})=> this.heroesService.getHeroById(id)),
      )
      .subscribe( hero => {
        /* saca a la persona de la vista */
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero=hero;
        return;
      })
  }

  goBack():void{
    this.router.navigateByUrl('heroes/list')
  }

}
