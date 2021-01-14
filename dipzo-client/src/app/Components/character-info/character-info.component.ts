import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/Services/character.service';
import { EpisodeService } from 'src/app/Services/episode.service';

import { Character } from '../../Models/character.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  @HostBinding('class') classes = 'row'   // -> Indicar que el componente principal tiene la clase row.

  character: Character = {};
  optionSelected: string = '';
  constructor(
    private characterSvc: CharacterService,
    private EpisodeSvc: EpisodeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
    this.characterSvc.getCharacter(id).subscribe(
      success => {
        this.character = success;
        
        this.character.episode.forEach((e: string, i: number) => {
          e = e.substring(e.indexOf('/episode/')+'/episode/'.length);
          this.EpisodeSvc.getEpisode(parseInt(e)).subscribe(
            success => {
              this.character.episode[i] = success;
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

  onOrigin(url: string) {
    console.log(url)
  }

  onChangeSelect() {
    this.router.navigate(['episode', this.optionSelected])
  }
}
