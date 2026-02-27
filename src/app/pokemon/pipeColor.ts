import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    const colors: any = {
      Feu: 'red lighten-1',
      Eau: 'blue lighten-1',
      Plante: 'green lighten-1',
      Poisson: 'lime darken-1',
      Normal: 'grey lighten-1',
      Poison: 'purple lighten-1',
      Insecte: 'yellow darken-2',
      Vol: 'pink lighten-2',
      Electrik: 'deep-purple lighten-4',
      Fée: 'orange darken-2'
    };

    return colors[type] || 'grey';
  }
}
