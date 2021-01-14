import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  API_URL = 'https://rickandmortyapi.com/api'; 
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(this.API_URL+'/character')
  }

  getCharacter() {

  }
}
