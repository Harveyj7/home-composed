import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-song',
  imports: [Nav, RouterLink],
  templateUrl: './song.html',
  styleUrl: './song.scss',
})
export class Song {
  readonly songId: string | null;

  constructor(route: ActivatedRoute) {
    this.songId = route.snapshot.paramMap.get('id');
  }
}
