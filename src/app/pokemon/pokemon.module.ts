import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pipeColor';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuard } from '../auth.guard';

/*const routes: Routes= [
      {path: 'pokemons', component: ListPokemonComponent}, // Route pour afficher la liste des pokémons
      {path: 'pokemons/:id', component: DetailPokemonComponent},
]; */

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    AddPokemonComponent,
    PokemonFormComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule ,// Importation du module CommonModule pour les fonctionnalités communes d'Angular (*NgIf et *NgFor)
    FormsModule,
    RouterModule
  ],
  exports: [
    ListPokemonComponent,
    DetailPokemonComponent
  ]

})
export class PokemonModule { }
