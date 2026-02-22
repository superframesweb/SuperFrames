import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))])])]
})
export class FilmDetailsComponent {
  film = {
    title: 'Midnight Blue', director: 'A. Director', year: 2024,
    synopsis: 'A dramatic journey through memory and time. The protagonist revisits moments that shaped their life.'
  };
}
