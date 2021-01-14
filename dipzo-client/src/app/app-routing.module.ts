import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterInfoComponent } from './Components/character-info/character-info.component';
import { CharactersListComponent } from './Components/characters-list/characters-list.component';
import { EpisodeInfoComponent } from './Components/episode-info/episode-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersListComponent},
  {path: 'character/:id', component: CharacterInfoComponent},
  {path: 'episode/:id', component: EpisodeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
