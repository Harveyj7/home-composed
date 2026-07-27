import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.date;
const _forTrack1 = ($index, $item) => $item.title;
function Rules_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 14)(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function Rules_For_28_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2);
} }
function Rules_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 16)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol");
    i0.ɵɵrepeaterCreate(4, Rules_For_28_For_5_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(section_r3.items);
} }
export class Rules {
    contactEmail = 'homecomposed2025@gmail.com';
    applicationFormUrl = 'https://home25.org/wp-content/uploads/2025/09/hcsc-2025-entry-form.docx';
    keyDates = [
        { date: '1 September 2025', label: 'Facebook previews begin' },
        { date: '19 October 2025, 23:59 CET', label: 'Song submission deadline' },
        { date: '20 October 2025', label: 'Songs available to listen to in full' },
        { date: '1-14 November 2025', label: 'Participant jury voting window' },
        { date: '7-14 November 2025', label: 'Online public vote' },
        { date: '29 November 2025', label: 'Grand Final on YouTube' },
    ];
    ruleSections = [
        {
            title: 'Participants',
            items: [
                'Participation is free of charge.',
                'Participants should be fans of the Eurovision Song Contest.',
                'The person submitting the entry, the Participant, should be a composer, lyricist, performer or producer of the song.',
                'The Participant must be from a country that is eligible to take part in the Eurovision Song Contest.',
                'All participating composers, lyricists and performers must be amateurs. For HCSC purposes, this means that the participants must not be full-time music industry professionals.',
                'Each participant will form a jury to listen to and judge all the competing songs.',
                'Participants are strongly recommended to join the HCSC Facebook group for news updates and community chat.',
            ],
        },
        {
            title: 'Songs',
            items: [
                'Each Participant may enter one song.',
                'The song must be your own original work. Covers are not allowed, and you may not enter songs that have been generated for you by AI sites.',
                'The maximum length of each song is six minutes.',
                'Songs may be submitted with vocals in any language. Instrumentals are also permitted.',
                'At its discretion, the Organising Committee may reject an entry if it is deemed to be unsuitable for the competition.',
                'It is an explicit condition of entry that the Participant has the legal right to enter the song into the competition and owns all rights necessary or has the permission of the owner of the rights. By submitting an entry, the Participant confirms that this is the case.',
                'The submitted song must not have been commercially released other than by self-publication. In case of doubt, the decision of the Organising Committee shall be final.',
                'The submitted song may include some help from music professionals to fulfil the composer\'s final vision of the song, as long as the help is not with the songwriting process.',
                'The Participant agrees that their entry may be freely made available for listening and download from this website from the date of submission until at least the end of 2025.',
                'There is no restriction on the number of participants from each country.',
                'In the event of an extremely large number of submitted entries, the Organising Committee reserves the right to implement a semi-final or other pre-selection phase. The limits and cut-off points for doing so will be determined at the discretion of the Organising Committee. However, this will only be done as a last resort.',
            ],
        },
        {
            title: 'What to submit',
            items: [
                'The entry form completed in full.',
                'An audio file of the song, ideally in mp3 format.',
                'The lyrics, in the language that the song is performed, with translations into another language or languages, should you wish.',
                'One or more photographs of the Participant and the performer or performers for publication along with your song. Photographs should be landscape rather than portrait if possible.',
                'A written introduction to the song and or performers, for publication along with your song.',
                `The song, the photographs and the entry form shall be submitted to ${this.contactEmail}.`,
                'Songs may be submitted from today\'s date up to the final deadline of 23:59 CET on 19 October 2025.',
                'Songs will be previewed on Facebook in the order that they are received by the organiser, during the period 1 September 2025 to 19 October 2025, and will be available to listen to in full from 20 October 2025.',
            ],
        },
        {
            title: 'Voting',
            items: [
                'Participants have from 1 November 2025 to 14 November 2025 to evaluate the songs and submit their votes. No votes may be submitted prior to 1 November.',
                'The voting show will be prepared once the voting deadline has passed.',
                'The Participant will form a jury of one or more people who will listen to all submitted entries and submit votes by the voting deadline.',
                'Each Participant\'s jury must rank all songs in order of preference.',
                'These will be converted by the Host into a top ten, Eurovision-style 1 to 8, 10 and 12 points, after allowing for the redistribution of votes to discount any disqualified entry.',
                'In the event that the Participant does not submit votes by the voting deadline, their entry will be disqualified.',
                'The participant will be invited to send a very short introduction video of themselves or someone they nominate, for inclusion in the show for the Grand Final.',
                'The Host, in consultation with the Organising Committee, will determine any guest juries to be invited to take part and the weighting of their votes.',
                'The Host, in consultation with the Organising Committee, will arrange a public internet vote using a reliable format, such as an IP-limited or registration-based online voting system, or a verifiable count of YouTube or SoundCloud views or likes. This vote is intended to encourage engagement from friends and fans of the competitors and the weighting of these votes will be the same as each individual jury votes.',
                'The online public vote will be open from 7 November 2025 to 14 November 2025.',
                'The Grand Final will be presented on YouTube on 29 November 2025.',
            ],
        },
        {
            title: 'Tie-break rules',
            items: [
                'In the event that the final result from Participant juries and guest juries results in a tie for first place, the public vote will be disregarded.',
                'In the unlikely event that a tie for first place still remains, the Eurovision-style system shall apply: the winner shall be the song that received points from more Participant juries, then the song that received more 12 points, then 10 points, all the way down to 1. If the tie still cannot be broken in this way, all of the tied songs shall be declared winners.',
            ],
        },
        {
            title: 'Fair conduct',
            items: [
                'By entering, each Participant agrees to play by the rules and the spirit of the competition and to abide by the decisions of the Organising Committee.',
                'The Participant must be ready to confirm his or her identity if asked. If the Participant fails to do so, the entry may be disqualified. The decision of the Organising Committee shall be final.',
                'Any suspicion of abuse, misuse, unsporting conduct, false identity or behaviour deemed to be not in the spirit of the competition, with regard to either the voting or the competition in general, will be investigated by the Organising Committee and may result in the disqualification of the Participant. The decision of the Organising Committee shall be final in all such matters.',
                'The Organiser reserves the full and final right to determine eligibility of participants and entries. Decisions may be made with regard to protecting the reputation and integrity of the competition, its entrants, and the submitted works. The Organiser is under no obligation to provide reasons for such decisions.',
            ],
        },
        {
            title: 'The winner',
            items: [
                'The winner of competition will be offered the opportunity to join the Organising Committee to contribute towards the organisation and hosting of the following year\'s competition.',
                'Please note that this is not obligatory, so do not be afraid to participate even if you are not interested in helping to organise the event.',
            ],
        },
        {
            title: 'Disputes',
            items: ['The Host\'s decision shall be final in all matters relating to the competition.'],
        },
    ];
    static ɵfac = function Rules_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Rules)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Rules, selectors: [["app-rules"]], decls: 44, vars: 5, consts: [[1, "rules-page"], ["aria-labelledby", "rules-title", 1, "rules-hero"], [1, "rules-hero__content"], [1, "eyebrow"], ["id", "rules-title"], [1, "rules-hero__lead"], [1, "rules-hero__note"], ["aria-label", "Rules contact", 1, "rules-contact"], [1, "rules-contact__label"], [3, "href"], ["aria-labelledby", "dates-title", 1, "timeline"], [1, "section-heading"], ["id", "dates-title"], [1, "timeline__grid"], [1, "date-card"], ["aria-label", "Full contest rules", 1, "rules-content"], [1, "rule-section"], ["aria-labelledby", "application-title", 1, "application-panel"], ["id", "application-title"], [1, "button", "button--primary", 3, "href"], [1, "site-footer"]], template: function Rules_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav");
            i0.ɵɵelementStart(1, "main", 0)(2, "section", 1)(3, "div", 2)(4, "p", 3);
            i0.ɵɵtext(5, "2025 edition");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1", 4);
            i0.ɵɵtext(7, "Contest rules");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 5);
            i0.ɵɵtext(9, " The 2025 edition of the Home Composed Song Contest is being organised by Andrew Brook, the host, in conjunction with Martin Faulkner from the HCSC Organising Committee and Ben Robertson. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p", 6);
            i0.ɵɵtext(11, " Please read the following rules and, if you agree to adhere to them, download the application form at the bottom of the page. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "aside", 7)(13, "span", 8);
            i0.ɵɵtext(14, "Questions about the rules");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 9);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "section", 10)(18, "div", 11)(19, "p", 3);
            i0.ɵɵtext(20, "Key dates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "h2", 12);
            i0.ɵɵtext(22, "Submission, voting and final schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 13);
            i0.ɵɵrepeaterCreate(24, Rules_For_25_Template, 5, 2, "article", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "section", 15);
            i0.ɵɵrepeaterCreate(27, Rules_For_28_Template, 6, 1, "article", 16, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "section", 17)(30, "div")(31, "p", 3);
            i0.ɵɵtext(32, "Application form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "h2", 18);
            i0.ɵɵtext(34, "Ready to enter?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, " Complete the entry form and send it with your song, supporting text and photographs to ");
            i0.ɵɵelementStart(37, "a", 9);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(39, ". ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "a", 19);
            i0.ɵɵtext(41, "Download application form");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "footer", 20);
            i0.ɵɵtext(43, "Designed by Harvey Jensen - 2026");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("href", "mailto:" + ctx.contactEmail, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.keyDates);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.ruleSections);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("href", "mailto:" + ctx.contactEmail, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contactEmail);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("href", ctx.applicationFormUrl, i0.ɵɵsanitizeUrl);
        } }, dependencies: [Nav], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #ffffff;\n  color: #172033;\n  font-family:\n    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.rules-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(180deg, #f7f9fc 0, #ffffff 340px),\n    #ffffff;\n}\n\n.rules-hero[_ngcontent-%COMP%], \n.timeline[_ngcontent-%COMP%], \n.rules-content[_ngcontent-%COMP%], \n.application-panel[_ngcontent-%COMP%] {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n}\n\n.rules-hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);\n  gap: 36px;\n  align-items: end;\n  padding: 88px 0 48px;\n}\n\n.rules-hero__content[_ngcontent-%COMP%] {\n  max-width: 780px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  color: #101827;\n  font-size: clamp(3.25rem, 7vw, 6.4rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.92;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #101827;\n  font-size: clamp(1.55rem, 2.4vw, 2.2rem);\n  font-weight: 850;\n  letter-spacing: 0;\n  line-height: 1.1;\n}\n\n.rules-hero__lead[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-bottom: 18px;\n  color: #3f4c64;\n  font-size: clamp(1.08rem, 1.8vw, 1.28rem);\n  line-height: 1.7;\n}\n\n.rules-hero__note[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin-bottom: 0;\n  color: #5b667a;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\n.rules-contact[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: 24px;\n  background: #ffffff;\n  box-shadow: 0 20px 48px rgb(16 24 39 / 10%);\n}\n\n.rules-contact__label[_ngcontent-%COMP%] {\n  color: #5b667a;\n  font-size: 0.88rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  line-height: 1.25;\n  text-transform: uppercase;\n}\n\na[_ngcontent-%COMP%] {\n  color: #b3274d;\n  font-weight: 800;\n  text-decoration-thickness: 0.08em;\n  text-underline-offset: 0.18em;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  padding: 22px 0 30px;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  align-items: end;\n  margin-bottom: 18px;\n}\n\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-bottom: 0;\n}\n\n.timeline__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.date-card[_ngcontent-%COMP%] {\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: 18px;\n  background: #ffffff;\n  box-shadow: 0 12px 30px rgb(16 24 39 / 7%);\n}\n\n.date-card[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #b3274d;\n  font-size: 0.94rem;\n  font-weight: 900;\n  line-height: 1.35;\n}\n\n.date-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #4b5870;\n  font-size: 0.95rem;\n  font-weight: 700;\n  line-height: 1.45;\n}\n\n.rules-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 18px;\n  padding: 28px 0 34px;\n}\n\n.rule-section[_ngcontent-%COMP%] {\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: clamp(24px, 4vw, 38px);\n  background: #ffffff;\n}\n\n.rule-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.rule-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  margin: 0;\n  padding-left: 1.35rem;\n  color: #4b5870;\n}\n\n.rule-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  line-height: 1.75;\n}\n\n.rule-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #b3274d;\n  font-weight: 900;\n}\n\n.application-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 28px;\n  align-items: center;\n  border: 1px solid #dfe4ee;\n  border-radius: 8px;\n  margin-bottom: 64px;\n  padding: clamp(24px, 4vw, 38px);\n  background: #f7f9fc;\n}\n\n.application-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n\n.application-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.application-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #4b5870;\n  font-size: 1rem;\n  line-height: 1.7;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 18px;\n  font-weight: 800;\n  line-height: 1;\n  text-decoration: none;\n  transition:\n    background 160ms ease,\n    border-color 160ms ease,\n    color 160ms ease,\n    transform 160ms ease;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.button--primary[_ngcontent-%COMP%] {\n  background: #172033;\n  color: #ffffff;\n}\n\n.button--primary[_ngcontent-%COMP%]:hover {\n  background: #b3274d;\n}\n\n.site-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e7eaf0;\n  padding: 24px 16px;\n  background: #ffffff;\n  color: #667085;\n  font-size: 0.92rem;\n  font-weight: 650;\n  text-align: center;\n}\n\n@media (max-width: 840px) {\n  .rules-hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding-top: 64px;\n  }\n\n  .rules-contact[_ngcontent-%COMP%] {\n    max-width: 420px;\n  }\n\n  .timeline__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .application-panel[_ngcontent-%COMP%] {\n    display: grid;\n    align-items: start;\n  }\n}\n\n@media (max-width: 560px) {\n  .rules-hero[_ngcontent-%COMP%], \n   .timeline[_ngcontent-%COMP%], \n   .rules-content[_ngcontent-%COMP%], \n   .application-panel[_ngcontent-%COMP%] {\n    width: min(100% - 24px, 1120px);\n  }\n\n  .rules-hero[_ngcontent-%COMP%] {\n    padding-top: 48px;\n  }\n\n  .section-heading[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .timeline__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .rule-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    padding-left: 1.15rem;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Rules, [{
        type: Component,
        args: [{ selector: 'app-rules', imports: [Nav], template: "<app-nav></app-nav>\n\n<main class=\"rules-page\">\n  <section class=\"rules-hero\" aria-labelledby=\"rules-title\">\n    <div class=\"rules-hero__content\">\n      <p class=\"eyebrow\">2025 edition</p>\n      <h1 id=\"rules-title\">Contest rules</h1>\n      <p class=\"rules-hero__lead\">\n        The 2025 edition of the Home Composed Song Contest is being organised by Andrew\n        Brook, the host, in conjunction with Martin Faulkner from the HCSC Organising\n        Committee and Ben Robertson.\n      </p>\n      <p class=\"rules-hero__note\">\n        Please read the following rules and, if you agree to adhere to them, download the\n        application form at the bottom of the page.\n      </p>\n    </div>\n\n    <aside class=\"rules-contact\" aria-label=\"Rules contact\">\n      <span class=\"rules-contact__label\">Questions about the rules</span>\n      <a [href]=\"'mailto:' + contactEmail\">{{ contactEmail }}</a>\n    </aside>\n  </section>\n\n  <section class=\"timeline\" aria-labelledby=\"dates-title\">\n    <div class=\"section-heading\">\n      <p class=\"eyebrow\">Key dates</p>\n      <h2 id=\"dates-title\">Submission, voting and final schedule</h2>\n    </div>\n\n    <div class=\"timeline__grid\">\n      @for (item of keyDates; track item.date) {\n        <article class=\"date-card\">\n          <time>{{ item.date }}</time>\n          <p>{{ item.label }}</p>\n        </article>\n      }\n    </div>\n  </section>\n\n  <section class=\"rules-content\" aria-label=\"Full contest rules\">\n    @for (section of ruleSections; track section.title) {\n      <article class=\"rule-section\">\n        <h2>{{ section.title }}</h2>\n        <ol>\n          @for (item of section.items; track item) {\n            <li>{{ item }}</li>\n          }\n        </ol>\n      </article>\n    }\n  </section>\n\n  <section class=\"application-panel\" aria-labelledby=\"application-title\">\n    <div>\n      <p class=\"eyebrow\">Application form</p>\n      <h2 id=\"application-title\">Ready to enter?</h2>\n      <p>\n        Complete the entry form and send it with your song, supporting text and photographs\n        to <a [href]=\"'mailto:' + contactEmail\">{{ contactEmail }}</a>.\n      </p>\n    </div>\n    <a class=\"button button--primary\" [href]=\"applicationFormUrl\">Download application form</a>\n  </section>\n</main>\n\n<footer class=\"site-footer\">Designed by Harvey Jensen - 2026</footer>\n", styles: [":host {\n  display: block;\n  min-height: 100vh;\n  background: #ffffff;\n  color: #172033;\n  font-family:\n    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n}\n\n.rules-page {\n  background:\n    linear-gradient(180deg, #f7f9fc 0, #ffffff 340px),\n    #ffffff;\n}\n\n.rules-hero,\n.timeline,\n.rules-content,\n.application-panel {\n  width: min(1120px, calc(100% - 32px));\n  margin: 0 auto;\n}\n\n.rules-hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);\n  gap: 36px;\n  align-items: end;\n  padding: 88px 0 48px;\n}\n\n.rules-hero__content {\n  max-width: 780px;\n}\n\n.eyebrow {\n  margin: 0 0 14px;\n  color: #b3274d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\nh1,\nh2,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 22px;\n  color: #101827;\n  font-size: clamp(3.25rem, 7vw, 6.4rem);\n  font-weight: 900;\n  letter-spacing: 0;\n  line-height: 0.92;\n}\n\nh2 {\n  color: #101827;\n  font-size: clamp(1.55rem, 2.4vw, 2.2rem);\n  font-weight: 850;\n  letter-spacing: 0;\n  line-height: 1.1;\n}\n\n.rules-hero__lead {\n  max-width: 720px;\n  margin-bottom: 18px;\n  color: #3f4c64;\n  font-size: clamp(1.08rem, 1.8vw, 1.28rem);\n  line-height: 1.7;\n}\n\n.rules-hero__note {\n  max-width: 700px;\n  margin-bottom: 0;\n  color: #5b667a;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\n.rules-contact {\n  display: grid;\n  gap: 10px;\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: 24px;\n  background: #ffffff;\n  box-shadow: 0 20px 48px rgb(16 24 39 / 10%);\n}\n\n.rules-contact__label {\n  color: #5b667a;\n  font-size: 0.88rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  line-height: 1.25;\n  text-transform: uppercase;\n}\n\na {\n  color: #b3274d;\n  font-weight: 800;\n  text-decoration-thickness: 0.08em;\n  text-underline-offset: 0.18em;\n}\n\n.timeline {\n  padding: 22px 0 30px;\n}\n\n.section-heading {\n  display: flex;\n  justify-content: space-between;\n  gap: 24px;\n  align-items: end;\n  margin-bottom: 18px;\n}\n\n.section-heading h2 {\n  max-width: 720px;\n  margin-bottom: 0;\n}\n\n.timeline__grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.date-card {\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: 18px;\n  background: #ffffff;\n  box-shadow: 0 12px 30px rgb(16 24 39 / 7%);\n}\n\n.date-card time {\n  display: block;\n  margin-bottom: 8px;\n  color: #b3274d;\n  font-size: 0.94rem;\n  font-weight: 900;\n  line-height: 1.35;\n}\n\n.date-card p {\n  margin-bottom: 0;\n  color: #4b5870;\n  font-size: 0.95rem;\n  font-weight: 700;\n  line-height: 1.45;\n}\n\n.rules-content {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 18px;\n  padding: 28px 0 34px;\n}\n\n.rule-section {\n  border: 1px solid #e3e7ef;\n  border-radius: 8px;\n  padding: clamp(24px, 4vw, 38px);\n  background: #ffffff;\n}\n\n.rule-section h2 {\n  margin-bottom: 18px;\n}\n\n.rule-section ol {\n  display: grid;\n  gap: 12px;\n  margin: 0;\n  padding-left: 1.35rem;\n  color: #4b5870;\n}\n\n.rule-section li {\n  padding-left: 8px;\n  line-height: 1.75;\n}\n\n.rule-section li::marker {\n  color: #b3274d;\n  font-weight: 900;\n}\n\n.application-panel {\n  display: flex;\n  justify-content: space-between;\n  gap: 28px;\n  align-items: center;\n  border: 1px solid #dfe4ee;\n  border-radius: 8px;\n  margin-bottom: 64px;\n  padding: clamp(24px, 4vw, 38px);\n  background: #f7f9fc;\n}\n\n.application-panel div {\n  max-width: 720px;\n}\n\n.application-panel h2 {\n  margin-bottom: 12px;\n}\n\n.application-panel p {\n  margin-bottom: 0;\n  color: #4b5870;\n  font-size: 1rem;\n  line-height: 1.7;\n}\n\n.button {\n  display: inline-flex;\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 18px;\n  font-weight: 800;\n  line-height: 1;\n  text-decoration: none;\n  transition:\n    background 160ms ease,\n    border-color 160ms ease,\n    color 160ms ease,\n    transform 160ms ease;\n}\n\n.button:hover {\n  transform: translateY(-1px);\n}\n\n.button--primary {\n  background: #172033;\n  color: #ffffff;\n}\n\n.button--primary:hover {\n  background: #b3274d;\n}\n\n.site-footer {\n  border-top: 1px solid #e7eaf0;\n  padding: 24px 16px;\n  background: #ffffff;\n  color: #667085;\n  font-size: 0.92rem;\n  font-weight: 650;\n  text-align: center;\n}\n\n@media (max-width: 840px) {\n  .rules-hero {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding-top: 64px;\n  }\n\n  .rules-contact {\n    max-width: 420px;\n  }\n\n  .timeline__grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .application-panel {\n    display: grid;\n    align-items: start;\n  }\n}\n\n@media (max-width: 560px) {\n  .rules-hero,\n  .timeline,\n  .rules-content,\n  .application-panel {\n    width: min(100% - 24px, 1120px);\n  }\n\n  .rules-hero {\n    padding-top: 48px;\n  }\n\n  .section-heading {\n    display: block;\n  }\n\n  .timeline__grid {\n    grid-template-columns: 1fr;\n  }\n\n  .rule-section ol {\n    padding-left: 1.15rem;\n  }\n\n  .button {\n    width: 100%;\n    text-align: center;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Rules, { className: "Rules", filePath: "src/app/components/rules/rules.ts", lineNumber: 15 }); })();
