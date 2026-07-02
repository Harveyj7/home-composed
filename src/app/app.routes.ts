import { Routes } from '@angular/router';
import { History } from './components/history/history';
import { Home } from './components/home/home';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { PublicVote } from './components/public-vote/public-vote';
import { Rules } from './components/rules/rules';
import { Song } from './components/song/song';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'songs', component: Song },
  { path: 'public-vote', component: PublicVote },
  { path: 'history', component: History },
  { path: 'rules', component: Rules },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: '**', redirectTo: '' },
];
