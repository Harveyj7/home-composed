import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';

type SongSummary = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  selector: 'app-songs-home',
  imports: [Nav, RouterLink],
  templateUrl: './songs-home.html',
  styleUrl: './songs-home.scss',
})
export class SongsHome {
  readonly songs: SongSummary[] = Array.from({ length: 25 }, (_, index) => {
    const id = index + 1;

    return {
      id,
      title: `Song ${id}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      imageUrl:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=640&q=80',
    };
  });
}
