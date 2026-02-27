import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../mock-pokemon';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../pipeColor';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../pokemon.service';
import {SearchPokemonComponent} from '../search-pokemon/search-pokemon.component';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe, SearchPokemonComponent],
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.css']
})
// Composant Angular pour afficher la liste des pokémons
export class ListPokemonComponent {
  pokemonList: Pokemon[]= POKEMONS; // Propriété pour stocker la liste des pokémons

  constructor(
    private router: Router,
    private pokemonService: PokemonService) { }
  ngOnInit() {
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);
  }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]); // Navigue vers la page de détails du Pokémon sélectionné en utilisant son ID
  }

}
