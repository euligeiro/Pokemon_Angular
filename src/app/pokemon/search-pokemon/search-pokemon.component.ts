import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {Router} from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  searchTerms: Subject<string> = new Subject<string>();
  pokemons$: Observable<Pokemon[]> | undefined;
  constructor(private router: Router, private pokemonService: PokemonService ) { }


  // Lorsqu'un utilisateur tape dans la barre de recherche, le terme de recherche est émis dans le flux searchTerms. Le composant utilise ensuite des opérateurs RxJS pour gérer ce flux de données :
  // debounceTime(300) : Attendre 300ms après la dernière frappe avant de lancer la recherche, afin d'éviter de faire une requête à chaque frappe.
  // distinctUntilChanged() : Ignorer les termes de recherche identiques consécutifs, pour éviter les recherches redondantes.
  // map(term => this.pokemonService.searchPokemons(term)) : Utiliser le terme de recherche pour appeler la méthode searchPokemons du service PokemonService, qui retourne un Observable de résultats de recherche.
  ngOnInit(): void{
    this.pokemons$= this.searchTerms.pipe(
      debounceTime(300), // Attendre 300ms après la dernière frappe avant de lancer la recherche
      distinctUntilChanged(), // Ignorer les termes de recherche identiques consécutifs
      switchMap((term)=> this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link= ['./pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
