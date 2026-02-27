import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon; // Propriété pour stocker les données du Pokémon à créer ou modifier
  types: string[]; // Propriété pour stocker la liste des types de Pokémon disponibles
  isAddForm: boolean;
  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string): void {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; // Récupération de l'état de la case à cocher (cochée ou décochée)
    if (isChecked) {
      this.pokemon.types.push(type); // Ajout du type à la liste des types du Pokémon si la case est cochée
    } else {
      const index = this.pokemon.types.indexOf(type); // Recherche de l'index du type dans la liste des types du Pokémon
      if (index > -1) {
        this.pokemon.types.splice(index, 1); // Suppression du type de la liste des types du Pokémon si la case est décochée
      }
    }
  }

  onsubmit($event: Event): void {
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon) => {
          this.router.navigate(['/pokemons', pokemon?.id]); // Redirection vers la page de détails du Pokémon après la soumission du formulaire
});
    } else{
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe((pokemon) => {
        if (pokemon) {
          this.router.navigate(['/pokemons', pokemon?.id]); // Redirection vers la page de détails du Pokémon après la soumission du formulaire
        }
      });
    }


    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe((pokemon) => {
        if (pokemon) {
          this.router.navigate(['/pokemons', pokemon?.id]); // Redirection vers la page de détails du Pokémon après la soumission du formulaire
        }
      });
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false; // Si le Pokémon n'a qu'un seul type et que c'est celui-ci, il n'est pas valide de le décocher
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false; // Si le Pokémon a déjà 3 types et que ce n'est pas celui-ci, il n'est pas valide de le cocher
    }
    return true; // Dans tous les autres cas, le type est valide
  }
}
