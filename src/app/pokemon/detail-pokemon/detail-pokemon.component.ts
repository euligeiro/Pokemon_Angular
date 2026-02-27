import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { CommonModule } from '@angular/common'; // Importation du module CommonModule pour les fonctionnalités communes d'Angular
import {PokemonTypeColorPipe} from '../pipeColor';  
import { PokemonService } from '../pokemon.service';
import { LoaderComponent } from '../loader/loader.component';

// Composant Angular pour afficher les détails d'un Pokémon
@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe, LoaderComponent],
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail.pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[]; // Propriété pour stocker la liste des pokémons
  pokemon: Pokemon|undefined;// Propriété pour stocker le Pokémon sélectionné
  constructor(private router: ActivatedRoute, private route: Router, private pokemonService: PokemonService) { }// Injection de dépendance du service ActivatedRoute pour accéder aux paramètres de l'URL et du service Router pour la navigation

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id'); // Récupération de l'ID du Pokémon à partir des paramètres de l'URL
    
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon); // Récupération du Pokémon correspondant à l'ID et stockage dans la propriété pokemon
    }
  }

  deletePokemon(pokemonId: number): void {
    this.pokemonService.deletePokemonById(pokemonId)
      .subscribe(() => {
        this.goToPokemonList(); // Redirection vers la liste des pokémons après la suppression
      }); 
    }

  // Méthode pour naviguer vers la liste des pokémons
  goToPokemonList(){
    this.route.navigate(['/pokemons']); // Redirige vers la liste des pokémons
  }

  goToEditPokemon(pokemonId: number): void {
    this.route.navigate(['/edit/pokemons', pokemonId]); // Redirige vers la page d'édition du Pokémon avec l'ID spécifié
  }
  
}
