import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
export class PublicVote {
    static ɵfac = function PublicVote_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PublicVote)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicVote, selectors: [["app-public-vote"]], decls: 3, vars: 0, template: function PublicVote_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "public-vote works!");
            i0.ɵɵelementEnd();
        } }, dependencies: [Nav], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicVote, [{
        type: Component,
        args: [{ selector: 'app-public-vote', imports: [
                    Nav
                ], template: "<app-nav></app-nav>\n<p>public-vote works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicVote, { className: "PublicVote", filePath: "src/app/components/public-vote/public-vote.ts", lineNumber: 12 }); })();
