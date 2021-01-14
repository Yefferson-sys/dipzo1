import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/Services/character.service';
import { EpisodeService } from 'src/app/Services/episode.service';

import { Episode } from '../../Models/episode.model';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.scss']
})
export class EpisodeInfoComponent implements OnInit {
  @HostBinding('class') classes = 'row'   // -> Indicar que el componente principal tiene la clase row.

  episode: Episode = {};
  characters: any = [];
  constructor(
    private EpisodeSvc: EpisodeService,
    private CharacterSvc: CharacterService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
    this.EpisodeSvc.getEpisode(id).subscribe(
      success => {
        this.episode = success;
        this.episode.characters.forEach((e: string, i: number) => {
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
