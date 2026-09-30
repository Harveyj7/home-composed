import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { songs } from '../../data/songs';
import { SongData } from '../../models/song-data';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-songs-home',
  imports: [Nav, RouterLink],
  templateUrl: './songs-home.html',
  styleUrl: './songs-home.scss',
})
export class SongsHome {
  readonly songs: SongData[] = songs;
}
