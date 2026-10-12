import { computed, Directive, effect, input, linkedSignal } from '@angular/core';
import type { SongData } from '../models/song-data';

@Directive({
  selector: 'img[appSongArtwork]',
  host: {
    '[src]': 'imageUrl()',
  },
})
export class SongArtwork {
  readonly appSongArtwork = input.required<SongData>();

  private readonly showSecondImage = linkedSignal({
    source: this.appSongArtwork,
    computation: () => false,
  });

  protected readonly imageUrl = computed(() => {
    const song = this.appSongArtwork();
    return (this.showSecondImage() ? song.imageUrl2 : undefined) || song.imageUrl;
  });

  constructor() {
    effect((onCleanup) => {
      if (!this.appSongArtwork().imageUrl2) {
        return;
      }

      const timer = setInterval(() => {
        this.showSecondImage.update((visible) => !visible);
      }, 2000);

      onCleanup(() => clearInterval(timer));
    });
  }
}
