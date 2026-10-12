import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { songs } from '../../data/songs';
import { SongArtwork } from '../../directives/song-artwork';
import { SongData } from '../../models/song-data';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-song',
  imports: [Nav, RouterLink, SongArtwork],
  templateUrl: './song.html',
  styleUrl: './song.scss',
})
export class Song {
  private readonly route = inject(ActivatedRoute);
  private readonly routeParams = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly song = computed<SongData | undefined>(() => {
    const songId = Number(this.routeParams().get('id'));
    return songs.find((song) => song.id === songId);
  });
  protected readonly nextSong = computed(() =>
    songs.find((song) => song.id === (this.song()?.id ?? 0) + 1),
  );
  protected readonly previousSong = computed(() =>
    songs.find((song) => song.id === (this.song()?.id ?? 0) - 1),
  );
  protected readonly countryFlag = computed(() => {
    const country = this.song()?.representing ?? '';
    return country.match(/\p{Regional_Indicator}{2}/u)?.[0] ?? (country.startsWith('UK') ? '🇬🇧' : '');
  });
  protected readonly flagCopies = [0, 1, 2, 3, 4];
  protected readonly bioGreetingCollapsible = signal(false);
  protected readonly bioGreetingExpanded = linkedSignal({
    source: this.song,
    computation: () => false,
  });
  protected readonly bioGreetingPreview = signal('');
  private readonly songTitle = viewChild<ElementRef<HTMLHeadingElement>>('songTitle');
  private readonly bioGreeting = viewChild<ElementRef<HTMLParagraphElement>>('bioGreetingMeasure');
  private readonly bioGreetingEnding = viewChild<ElementRef<HTMLSpanElement>>('bioGreetingEnding');

  constructor() {
    afterRenderEffect({
      read: (onCleanup) => {
        const song = this.song();
        const title = this.songTitle()?.nativeElement;
        const greeting = this.bioGreeting()?.nativeElement;
        const previewEnding = this.bioGreetingEnding()?.nativeElement;
        if (!title || !greeting || !previewEnding || !song) return;
        const fullGreeting = song.bioGreeting;

        const updateGreeting = () => {
          const bounds = greeting.getBoundingClientRect();
          const lineHeight = parseFloat(getComputedStyle(greeting).lineHeight);
          // Scrolling should not change where the preview ends in the document.
          const availableHeight = Math.max(
            lineHeight,
            window.innerHeight / 1.3 - (bounds.top + window.scrollY),
          );
          const collapsible = bounds.height > availableHeight;
          if (collapsible) {
            // Fit whole lines with room for the inline ellipsis and caret.
            const measure = greeting.cloneNode(false) as HTMLParagraphElement;
            const text = document.createTextNode('');
            const ending = previewEnding.cloneNode(true) as HTMLSpanElement;
            ending.hidden = false;
            measure.append(text, ending);
            greeting.parentElement!.append(measure);

            let start = 0;
            let end = fullGreeting.length;
            while (start < end) {
              const middle = Math.ceil((start + end) / 2);
              text.data = fullGreeting.slice(0, middle).trimEnd();
              if (measure.getBoundingClientRect().height <= availableHeight) {
                start = middle;
              } else {
                end = middle - 1;
              }
            }
            measure.remove();
            let preview = fullGreeting.slice(0, start).trimEnd();
            if (start < fullGreeting.length && /\S/.test(fullGreeting[start])) {
              const lastSpace = preview.lastIndexOf(' ');
              if (lastSpace > 0) preview = preview.slice(0, lastSpace);
            }
            this.bioGreetingPreview.set(preview);
          }
          this.bioGreetingCollapsible.set(collapsible);
          if (!collapsible) this.bioGreetingExpanded.set(false);
        };

        updateGreeting();
        const observer = new ResizeObserver(updateGreeting);
        observer.observe(title);
        observer.observe(greeting);
        window.addEventListener('resize', updateGreeting);
        onCleanup(() => {
          observer.disconnect();
          window.removeEventListener('resize', updateGreeting);
        });
      },
    });
  }

  protected toggleBioGreeting(): void {
    this.bioGreetingExpanded.update((expanded) => !expanded);
  }
}
