import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('360ms ease-out', style({ opacity: 1 }))])])]
})
export class HomeComponent {
  films = [
    { id: '1', title: 'Midnight Blue', year: 2024, poster: 'Poster', director: 'A. Director' },
    { id: '2', title: 'Shores of Time', year: 2023, poster: 'Poster', director: 'B. Filmmaker' },
    { id: '3', title: 'The Wandering', year: 2022, poster: 'Poster', director: 'C. Auteur' },
    { id: '4', title: 'Silent Echoes', year: 2021, poster: 'Poster', director: 'D. Director' }
  ];
}
