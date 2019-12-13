import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
    constructor(private http: HttpClient) {

    }
    getPokemons() {
       console.log( this.http.get(
            'https://pokeapi.co/api/v2/pokemon/ditto'
        ).subscribe());

    }
}