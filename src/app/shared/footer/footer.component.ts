import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { HoverScaleDirective } from '../hover-scale.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, HoverScaleDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  authName = this.auth.getCurrentUser()?.username ?? 'Guest';
  
  constructor(public auth: AuthService, private router: Router) {
    this.auth.currentUser$.subscribe(u => this.authName = u?.username ?? 'Guest');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
