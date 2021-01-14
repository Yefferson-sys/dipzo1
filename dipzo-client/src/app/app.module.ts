import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { CharactersListComponent } from './Components/characters-list/characters-list.component';


import { HttpClientModule } from '@angular/common/http'
import { CharacterService } from './Services/character.service';
import { CharacterInfoComponent } from './Components/character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CharactersListComponent,
    CharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
