import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', [style({ opacity: 0, transform: 'translateY(6px)' }), animate('360ms ease-out', style({ opacity: 1, transform: 'none' }))])]),
    trigger('errorFade', [transition(':enter', [style({ opacity: 0 }), animate('300ms ease-out', style({ opacity: 1 }))])])
  ]
})
export class LoginComponent {
  error = signal('');
  loading = signal(false);
  form = this.fb.group({ username: ['', Validators.required], password: ['', [Validators.required, Validators.minLength(6)]] });
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
  async submit() {
    this.error.set('');
    if (this.form.invalid) { this.error.set('Please enter credentials (password min 6 chars).'); return; }
    this.loading.set(true);
    const { username, password } = this.form.value;
    try {
      const ok = await this.auth.login(username!, password!);
      if (ok) { await this.router.navigate(['/home']); } else { this.error.set('Invalid username or password.'); }
    } catch { this.error.set('Login error.'); }
    finally { this.loading.set(false); }
  }
}
