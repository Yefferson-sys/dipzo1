import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  API_URL = 'https://rickandmortyapi.com/api'; 
  constructor( private http: HttpClient ) { }

  getEpisode( id: number ) {
    return this.http.get(this.API_URL+'/episode/'+id);
  }
}
