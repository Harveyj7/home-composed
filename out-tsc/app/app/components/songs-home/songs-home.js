import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/songs", a0];
const _forTrack0 = ($index, $item) => $item.id;
function SongsHome_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 5);
    i0.ɵɵelement(1, "img", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "p", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 9);
    i0.ɵɵtext(10, "View song");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const song_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", song_r1.imageUrl, i0.ɵɵsanitizeUrl)("alt", song_r1.title + " stock music image");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Song ", song_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(song_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(song_r1.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, song_r1.id));
} }
export class SongsHome {
    songs = Array.from({ length: 25 }, (_, index) => {
        const id = index + 1;
        return {
            id,
            title: `Song ${id}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=640&q=80',
        };
    });
    static ɵfac = function SongsHome_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SongsHome)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SongsHome, selectors: [["app-songs-home"]], decls: 12, vars: 0, consts: [[1, "songs-page"], ["aria-labelledby", "songs-title", 1, "songs-hero"], [1, "eyebrow"], ["id", "songs-title"], ["aria-label", "Song list", 1, "song-list"], [1, "song-card"], ["loading", "lazy", 3, "src", "alt"], [1, "song-card__content"], [1, "song-card__number"], [3, "routerLink"]], template: function SongsHome_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "main", 0)(2, "section", 1)(3, "p", 2);
            i0.ɵɵtext(4, "All songs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1", 3);
            i0.ɵɵtext(6, "Songs 1-25");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, " Browse the competing entries for the Home Composed Song Contest 2026. Descriptions are temporary placeholders until the final song copy is ready. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "section", 4);
            i0.ɵɵrepeaterCreate(10, SongsHome_For_11_Template, 11, 8, "article", 5, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.songs);
        } }, dependencies: [Nav, RouterLink], styles: [".songs-page[_ngcontent-%COMP%] {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 72px 0;\n}\n\n.songs-hero[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin-bottom: 34px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  color: #101827;\n  font-size: clamp(3rem, 6vw, 5.6rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.95;\n}\n\n.songs-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.eyebrow) {\n  color: #4b5870;\n  font-size: 1.15rem;\n  line-height: 1.7;\n}\n\n.song-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n\n.song-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 180px minmax(0, 1fr);\n  gap: 22px;\n  align-items: stretch;\n  overflow: hidden;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 14px 30px rgb(16 24 39 / 7%);\n}\n\n.song-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 158px;\n  object-fit: cover;\n}\n\n.song-card__content[_ngcontent-%COMP%] {\n  padding: 22px 24px 22px 0;\n}\n\n.song-card__number[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #b3274d;\n  font-size: 0.76rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.song-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #101827;\n  font-size: 1.45rem;\n  font-weight: 850;\n  letter-spacing: 0;\n  line-height: 1.15;\n}\n\n.song-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.song-card__number) {\n  margin-bottom: 18px;\n  color: #4b5870;\n  line-height: 1.65;\n}\n\n.song-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  border-radius: 8px;\n  background: #172033;\n  padding: 0 14px;\n  color: #ffffff;\n  font-weight: 800;\n  line-height: 1;\n  text-decoration: none;\n  transition:\n    background 160ms ease,\n    transform 160ms ease;\n}\n\n.song-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #b3274d;\n  transform: translateY(-1px);\n}\n\n@media (max-width: 640px) {\n  .songs-page[_ngcontent-%COMP%] {\n    width: min(100% - 24px, 1120px);\n    padding: 48px 0;\n  }\n\n  .song-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n\n  .song-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    aspect-ratio: 16 / 9;\n    min-height: 0;\n  }\n\n  .song-card__content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SongsHome, [{
        type: Component,
        args: [{ selector: 'app-songs-home', imports: [Nav, RouterLink], template: "<app-nav></app-nav>\n\n<main class=\"songs-page\">\n  <section class=\"songs-hero\" aria-labelledby=\"songs-title\">\n    <p class=\"eyebrow\">All songs</p>\n    <h1 id=\"songs-title\">Songs 1-25</h1>\n    <p>\n      Browse the competing entries for the Home Composed Song Contest 2026. Descriptions\n      are temporary placeholders until the final song copy is ready.\n    </p>\n  </section>\n\n  <section class=\"song-list\" aria-label=\"Song list\">\n    @for (song of songs; track song.id) {\n      <article class=\"song-card\">\n        <img [src]=\"song.imageUrl\" [alt]=\"song.title + ' stock music image'\" loading=\"lazy\" />\n        <div class=\"song-card__content\">\n          <p class=\"song-card__number\">Song {{ song.id }}</p>\n          <h2>{{ song.title }}</h2>\n          <p>{{ song.description }}</p>\n          <a [routerLink]=\"['/songs', song.id]\">View song</a>\n        </div>\n      </article>\n    }\n  </section>\n</main>\n", styles: ["\n.songs-page {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 72px 0;\n}\n\n.songs-hero {\n  max-width: 780px;\n  margin-bottom: 34px;\n}\n\n.eyebrow {\n  margin: 0 0 12px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1 {\n  margin-bottom: 18px;\n  color: #101827;\n  font-size: clamp(3rem, 6vw, 5.6rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.95;\n}\n\n.songs-hero p:not(.eyebrow) {\n  color: #4b5870;\n  font-size: 1.15rem;\n  line-height: 1.7;\n}\n\n.song-list {\n  display: grid;\n  gap: 16px;\n}\n\n.song-card {\n  display: grid;\n  grid-template-columns: 180px minmax(0, 1fr);\n  gap: 22px;\n  align-items: stretch;\n  overflow: hidden;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0 14px 30px rgb(16 24 39 / 7%);\n}\n\n.song-card img {\n  width: 100%;\n  height: 100%;\n  min-height: 158px;\n  object-fit: cover;\n}\n\n.song-card__content {\n  padding: 22px 24px 22px 0;\n}\n\n.song-card__number {\n  margin-bottom: 8px;\n  color: #b3274d;\n  font-size: 0.76rem;\n  font-weight: 900;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.song-card h2 {\n  margin-bottom: 10px;\n  color: #101827;\n  font-size: 1.45rem;\n  font-weight: 850;\n  letter-spacing: 0;\n  line-height: 1.15;\n}\n\n.song-card p:not(.song-card__number) {\n  margin-bottom: 18px;\n  color: #4b5870;\n  line-height: 1.65;\n}\n\n.song-card a {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  border-radius: 8px;\n  background: #172033;\n  padding: 0 14px;\n  color: #ffffff;\n  font-weight: 800;\n  line-height: 1;\n  text-decoration: none;\n  transition:\n    background 160ms ease,\n    transform 160ms ease;\n}\n\n.song-card a:hover {\n  background: #b3274d;\n  transform: translateY(-1px);\n}\n\n@media (max-width: 640px) {\n  .songs-page {\n    width: min(100% - 24px, 1120px);\n    padding: 48px 0;\n  }\n\n  .song-card {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n\n  .song-card img {\n    aspect-ratio: 16 / 9;\n    min-height: 0;\n  }\n\n  .song-card__content {\n    padding: 20px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SongsHome, { className: "SongsHome", filePath: "src/app/components/songs-home/songs-home.ts", lineNumber: 18 }); })();
