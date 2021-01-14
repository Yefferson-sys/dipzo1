import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(
    private EpisodeSvc: EpisodeService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
    this.EpisodeSvc.getEpisode(id).subscribe(
      success => {
        this.episode = success;
      },
      error => {

      }  
    )
  }

}
