import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
export class History {
    static ɵfac = function History_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || History)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: History, selectors: [["app-history"]], decls: 3, vars: 0, template: function History_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "history works!");
            i0.ɵɵelementEnd();
        } }, dependencies: [Nav], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(History, [{
        type: Component,
        args: [{ selector: 'app-history', imports: [
                    Nav
                ], template: "<app-nav></app-nav>\n<p>history works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(History, { className: "History", filePath: "src/app/components/history/history.ts", lineNumber: 12 }); })();
