import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
export class PrivacyPolicy {
    static ɵfac = function PrivacyPolicy_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PrivacyPolicy)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PrivacyPolicy, selectors: [["app-privacy-policy"]], decls: 3, vars: 0, template: function PrivacyPolicy_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "privacy-policy works!");
            i0.ɵɵelementEnd();
        } }, dependencies: [Nav], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PrivacyPolicy, [{
        type: Component,
        args: [{ selector: 'app-privacy-policy', imports: [
                    Nav
                ], template: "<app-nav></app-nav>\n<p>privacy-policy works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PrivacyPolicy, { className: "PrivacyPolicy", filePath: "src/app/components/privacy-policy/privacy-policy.ts", lineNumber: 12 }); })();
