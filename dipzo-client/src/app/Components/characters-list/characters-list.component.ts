import { Component, HostBinding, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/Services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  characters: any = {};

  constructor( private characterSvc: CharacterService ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterSvc.getCharacters().subscribe(
      (success) => {
        this.characters = success;
      }, 
      (error) => {

      }
    )
  }

  onNewPage(url: string) {
    if (url == null ) return;
    const newPage = url.substring(url.indexOf('?page=')+'?page='.length);
    this.characterSvc.getNewPage( parseInt(newPage)).subscribe(
      (success) => {
        this.characters = success;
      }, 
      (error) => {

      }
    )
  }

}
