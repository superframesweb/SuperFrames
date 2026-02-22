import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-script-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './script-details.component.html',
  styleUrls: ['./script-details.component.scss'],
  animations: [trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('320ms ease-out', style({ opacity: 1 }))])])]
})
export class ScriptDetailsComponent {
  script = `INT. ROOM - NIGHT
A single lamp flickers. The room is filled with scattered notebooks.

CHARACTER
(whispering)
I thought I left it behind.

CUT TO:

EXT. BEACH - DAY
Waves crash against the shore. A long monologue unfolds...`;
}
