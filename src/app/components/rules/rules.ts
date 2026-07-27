import { Component } from '@angular/core';
import { Nav } from '../nav/nav';

interface RuleSection {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-rules',
  imports: [Nav],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {
  readonly contactEmail = 'homecomposed2026@gmail.com';
  readonly applicationFormUrl =
    'https://home25.org/wp-content/uploads/2026/09/hcsc-2026-entry-form.docx';

  readonly keyDates = [
    { date: '1 September 2026', label: 'Facebook previews begin' },
    { date: '19 October 2026, 23:59 CET', label: 'Song submission deadline' },
    { date: '20 October 2026', label: 'Songs available to listen to in full' },
    { date: '1-14 November 2026', label: 'Participant jury voting window' },
    { date: '7-14 November 2026', label: 'Online public vote' },
    { date: '29 November 2026', label: 'Grand Final on YouTube' },
  ];

  readonly ruleSections: RuleSection[] = [
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
        'The Participant agrees that their entry may be freely made available for listening and download from this website from the date of submission until at least the end of 2026.',
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
        'Songs may be submitted from today\'s date up to the final deadline of 23:59 CET on 19 October 2026.',
        'Songs will be previewed on Facebook in the order that they are received by the organiser, during the period 1 September 2026 to 19 October 2026, and will be available to listen to in full from 20 October 2026.',
      ],
    },
    {
      title: 'Voting',
      items: [
        'Participants have from 1 November 2026 to 14 November 2026 to evaluate the songs and submit their votes. No votes may be submitted prior to 1 November.',
        'The voting show will be prepared once the voting deadline has passed.',
        'The Participant will form a jury of one or more people who will listen to all submitted entries and submit votes by the voting deadline.',
        'Each Participant\'s jury must rank all songs in order of preference.',
        'These will be converted by the Host into a top ten, Eurovision-style 1 to 8, 10 and 12 points, after allowing for the redistribution of votes to discount any disqualified entry.',
        'In the event that the Participant does not submit votes by the voting deadline, their entry will be disqualified.',
        'The participant will be invited to send a very short introduction video of themselves or someone they nominate, for inclusion in the show for the Grand Final.',
        'The Host, in consultation with the Organising Committee, will determine any guest juries to be invited to take part and the weighting of their votes.',
        'The Host, in consultation with the Organising Committee, will arrange a public internet vote using a reliable format, such as an IP-limited or registration-based online voting system, or a verifiable count of YouTube or SoundCloud views or likes. This vote is intended to encourage engagement from friends and fans of the competitors and the weighting of these votes will be the same as each individual jury votes.',
        'The online public vote will be open from 7 November 2026 to 14 November 2026.',
        'The Grand Final will be presented on YouTube on 29 November 2026.',
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
}
