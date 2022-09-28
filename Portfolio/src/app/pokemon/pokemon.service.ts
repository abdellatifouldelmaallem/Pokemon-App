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
      tap((res)=>this.log(res)),
      catchError((error)=> this.handleError(error,[]))
     );
 }

 getPokemonById(pokemonId:number):Observable <Pokemon|undefined>{
  return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
    tap((res)=>this.log(res)),
    catchError((error)=> this.handleError(error,undefined))
   );
 }

 private log(response : Pokemon[]|Pokemon|undefined ){
      console.table(response)
 }

 private handleError(error:Error,errorValue:any){
  console.error(error)
  return of(errorValue);
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
