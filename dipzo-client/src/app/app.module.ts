import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CharactersListComponent } from './Components/characters-list/characters-list.component';


import { HttpClientModule } from '@angular/common/http'
import { CharacterService } from './Services/character.service';
import { EpisodeService } from './Services/episode.service';
import { LocationService } from './Services/location.service';
import { CharacterInfoComponent } from './Components/character-info/character-info.component';
import { EpisodeInfoComponent } from './Components/episode-info/episode-info.component';
import { LocationInfoComponent } from './Components/location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharactersListComponent,
    CharacterInfoComponent,
    EpisodeInfoComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CharacterService,
    LocationService,
    EpisodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
