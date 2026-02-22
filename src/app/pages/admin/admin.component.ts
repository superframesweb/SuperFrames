import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="card"><h2>Admin panel</h2><p>Admin panel – user management coming soon</p></section>`,
  styles: [`
    .card{background:var(--card);padding:1rem;border-radius:8px;box-shadow:0 8px 24px rgba(16,24,40,0.04)}
    h2{color:var(--primary)}
  `]
})
export class AdminComponent {}
