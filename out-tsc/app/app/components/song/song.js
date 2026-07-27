import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class Song {
    songId;
    constructor(route) {
        this.songId = route.snapshot.paramMap.get('id');
    }
    static ɵfac = function Song_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Song)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Song, selectors: [["app-song"]], decls: 13, vars: 1, consts: [[1, "song-page"], ["routerLink", "/songs", 1, "back-link"], ["aria-labelledby", "song-title", 1, "song-detail"], [1, "eyebrow"], ["id", "song-title"], ["src", "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80", "alt", "Stock image of a live music performance"]], template: function Song_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "main", 0)(2, "a", 1);
            i0.ɵɵtext(3, "Back to all songs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 2)(5, "div")(6, "p", 3);
            i0.ɵɵtext(7, "Contest entry");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1", 4);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(12, "img", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("Song ", ctx.songId);
        } }, dependencies: [Nav, RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #ffffff;\n  color: #172033;\n  font-family:\n    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.song-page[_ngcontent-%COMP%] {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 56px 0 72px;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  margin-bottom: 28px;\n  border-radius: 8px;\n  background: #f3f5f9;\n  padding: 0 14px;\n  color: #172033;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #b3274d;\n}\n\n.song-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);\n  gap: 32px;\n  align-items: center;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  color: #101827;\n  font-size: clamp(3rem, 6vw, 5.6rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.95;\n}\n\np[_ngcontent-%COMP%]:not(.eyebrow) {\n  color: #4b5870;\n  font-size: 1.12rem;\n  line-height: 1.7;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n  box-shadow: 0 18px 42px rgb(16 24 39 / 10%);\n}\n\n@media (max-width: 760px) {\n  .song-page[_ngcontent-%COMP%] {\n    width: min(100% - 24px, 1120px);\n    padding-top: 42px;\n  }\n\n  .song-detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Song, [{
        type: Component,
        args: [{ selector: 'app-song', imports: [Nav, RouterLink], template: "<app-nav></app-nav>\n\n<main class=\"song-page\">\n  <a class=\"back-link\" routerLink=\"/songs\">Back to all songs</a>\n\n  <section class=\"song-detail\" aria-labelledby=\"song-title\">\n    <div>\n      <p class=\"eyebrow\">Contest entry</p>\n      <h1 id=\"song-title\">Song {{ songId }}</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur\n        purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.\n      </p>\n    </div>\n    <img\n      src=\"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80\"\n      alt=\"Stock image of a live music performance\"\n    />\n  </section>\n</main>\n", styles: [":host {\n  display: block;\n  min-height: 100vh;\n  background: #ffffff;\n  color: #172033;\n  font-family:\n    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.song-page {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 56px 0 72px;\n}\n\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  margin-bottom: 28px;\n  border-radius: 8px;\n  background: #f3f5f9;\n  padding: 0 14px;\n  color: #172033;\n  font-weight: 800;\n  text-decoration: none;\n}\n\n.back-link:hover {\n  color: #b3274d;\n}\n\n.song-detail {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);\n  gap: 32px;\n  align-items: center;\n}\n\n.eyebrow {\n  margin: 0 0 12px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 18px;\n  color: #101827;\n  font-size: clamp(3rem, 6vw, 5.6rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.95;\n}\n\np:not(.eyebrow) {\n  color: #4b5870;\n  font-size: 1.12rem;\n  line-height: 1.7;\n}\n\nimg {\n  width: 100%;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n  box-shadow: 0 18px 42px rgb(16 24 39 / 10%);\n}\n\n@media (max-width: 760px) {\n  .song-page {\n    width: min(100% - 24px, 1120px);\n    padding-top: 42px;\n  }\n\n  .song-detail {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Song, { className: "Song", filePath: "src/app/components/song/song.ts", lineNumber: 11 }); })();
