import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="center">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" />
    <h1>Page non trouvée!!!</h1>
    <a routerLink="/pokemons" class ="effect waves-teal btn-flat">
    Retour à la liste des pokémons
    </a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent implements OnInit {
  ngOnInit(): void {
  }

}
