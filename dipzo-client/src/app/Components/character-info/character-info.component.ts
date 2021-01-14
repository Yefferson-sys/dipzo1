import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/Services/character.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  @HostBinding('class') classes = 'row'   // -> Indicar que el componente principal tiene la clase row.

  character: any = {};

  constructor(
    private characterSvc: CharacterService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const {id} = this.activeRoute.snapshot.params;
    this.characterSvc.getCharacter(id).subscribe(
      success => {
        this.character = success;
      },
      error => {

      }
    )
  }

}
