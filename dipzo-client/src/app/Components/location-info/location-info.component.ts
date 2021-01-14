import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/Services/character.service';
import { LocationService } from 'src/app/Services/location.service';

import { Location } from '../../Models/location.model';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss']
})
export class LocationInfoComponent implements OnInit {
  location: Location = {};
  characters: any = [];
  constructor(
    private LocationSvc: LocationService,
    private CharacterSvc: CharacterService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
    this.LocationSvc.getLocation(id).subscribe(
      success => {
        this.location = success;
        this.location.residents.forEach((e: string, i: number) => {
          e = e.substring(e.indexOf('/character/')+'/character/'.length);
          this.CharacterSvc.getCharacter(parseInt(e)).subscribe(
            success => {
              this.characters.push(success);
            }, 
            error => {

            }
          )
        });
      },
      error => {

      }  
    )
  }
}
