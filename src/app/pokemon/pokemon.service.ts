import { Component, Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({ // This service is provided at the root level, making it available throughout the application without needing to add it to the providers array of any specific module.-> Podemos usar este servicio en cualquier componente o servicio de la aplicación sin necesidad de importarlo explícitamente en un módulo.
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) {

  }
  
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => { this.handleError(error, []); return of([]); })
    );
  }



  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => { this.handleError(error, undefined);
        return of(undefined);
      })
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length <= 1) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => { this.handleError(error, []); return of([]); })
    );  
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon| undefined> {
    const httpOptions={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => { this.handleError(error, undefined); return of(undefined); })
    );
  }

  deletePokemonById(pokemonId: number): Observable<{}> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap(() => console.log('Pokemon deleted successfully')),
      catchError((error) => { this.handleError(error, {}); return of({}); })
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => { this.handleError(error, undefined); return of(undefined); })
    );
  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue:any) {
    console.log(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Poison', 'Fée', 'Electrik', 'Combat', 'Psy'];
  }

}
