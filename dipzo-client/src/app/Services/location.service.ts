import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  API_URL = 'https://rickandmortyapi.com/api'; 
  constructor( private http: HttpClient ) { }

  getLocation( id: number ) {
    return this.http.get(this.API_URL+'/location/'+id);
  }
}
