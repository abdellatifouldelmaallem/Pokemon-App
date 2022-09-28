import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  // table = [];

  constructor(
    private http:HttpClientModule
    ){}


 getPokemonList(): Pokemon[]{
     return POKEMONS;
 }

 getPokemonById(pokemonId:number): Pokemon|undefined{
  return POKEMONS.find(pokemon=>pokemon.id == pokemonId)
 }

 getPokemonTypeList():string[]{
  return [
    'Plante',
    'Poison',
    'Feu',
    'Eau',
    'Insecte',
    'Normal',
    'Vol',
    'Electrik',
    'Fée'
  ]
 }

}
