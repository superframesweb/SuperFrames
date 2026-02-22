import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { HoverScaleDirective } from '../hover-scale.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, HoverScaleDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('closed => open', [style({ transform: 'translateX(100%)' }), animate('320ms ease-out', style({ transform: 'translateX(0%)' }))]),
      transition('open => closed', [animate('240ms ease-in', style({ transform: 'translateX(100%)' }))])
    ])
  ]
})
export class NavbarComponent {
  open = signal(false);
  
  constructor(public auth: AuthService) {}
  
  toggle() { this.open.set(!this.open()); }
  close() { this.open.set(false); }
  has(perm: string) { return this.auth.hasPermission(perm); }
  isAdmin() { return this.auth.getCurrentUser()?.role === 'admin'; }
}
