import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import songs from '../../data/song.json';
import { SongData } from '../../models/song-data';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-song',
  imports: [Nav, RouterLink],
  templateUrl: './song.html',
  styleUrl: './song.scss',
})
export class Song {
  readonly song: SongData | undefined;

  constructor(route: ActivatedRoute) {
    const songId = Number(route.snapshot.paramMap.get('id'));
    this.song = songs.find((song) => song.id === songId);
  }
}
