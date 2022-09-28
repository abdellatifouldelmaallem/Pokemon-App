import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  // table = [];

  constructor(
    private http:HttpClient
    ){}


 getPokemonList(): Observable<Pokemon[]>{
     return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList)=>console.table(pokemonList)),
      catchError((error)=>{
        console.log(error);
        return of([]);
      })
     )
 }

 getPokemonById(pokemonId:number):Observable <Pokemon|undefined>{
  return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
    tap((pokemonId)=>console.log(pokemonId)),
    catchError((error)=>{
      console.log(error);
      return of(undefined);
    })
   )
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
