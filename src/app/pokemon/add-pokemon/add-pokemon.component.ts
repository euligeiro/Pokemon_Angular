import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center">✨ Ajouter un nouveau Pokémon ✨</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [`
    h2 {
      color: #d46b8c;
      text-align: center;
      margin: 30px 0;
      font-size: 2em;
      font-family: 'Comic Sans MS', cursive, sans-serif;
    }
  `]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  
  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}