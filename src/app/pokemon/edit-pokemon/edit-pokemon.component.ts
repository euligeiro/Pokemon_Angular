import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [ CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center"> Editer {{pokemon?.name}} </h2>
    <p *ngIf="pokemon" class= "center">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent {

  pokemon: Pokemon | undefined;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute

  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); // Récupération de l'ID du Pokémon à partir des paramètres de la route
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon); // Récupération du Pokémon correspondant à l'ID et stockage dans la propriété pokemon
    } else {
      this.pokemon = undefined;
    }
  }

}
