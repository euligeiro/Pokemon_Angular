import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, routes } from './app.routes';
import { AppComponent} from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonService } from './pokemon/pokemon.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchPokemonComponent } from './pokemon/search-pokemon/search-pokemon.component';
@NgModule ({

declarations:[
    AppComponent,
    PageNotFoundComponent
],
imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    CommonModule,
    PokemonModule,
    AppRoutingModule,
    routes,
    SearchPokemonComponent
],
providers:[PokemonService],
bootstrap: [AppComponent] 

})

export class AppModule {}