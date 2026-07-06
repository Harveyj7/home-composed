import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-home',
  imports: [Nav, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
