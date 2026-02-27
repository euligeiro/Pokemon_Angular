import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './pokemon/add-pokemon/add-pokemon.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'edit/pokemons/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
    {path: 'edit/pokemons/:id', component: EditPokemonComponent,canActivate: [AuthGuard]},
    {path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
    { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] }, // Route pour afficher la liste des pokémons
    { path: 'pokemons/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection de la route racine vers la liste des pokémons
    {path: 'login', component: LoginComponent},
    { path: '**', component: PageNotFoundComponent } // Route pour gérer les chemins non définis et afficher la page de non-trouvée
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]


})
export class AppRoutingModule { }