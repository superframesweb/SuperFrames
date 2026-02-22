import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface AppUser { username: string; role: string; permissions: string[] }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'fsp_user_v1';
  currentUser$ = new BehaviorSubject<AppUser | null>(null);
  private usersCache: Array<{ username: string; passwordHash: string; role: string; permissions: string[] }> | null = null;

  constructor(private http: HttpClient) {
    const raw = sessionStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try { this.currentUser$.next(JSON.parse(raw)); } catch { sessionStorage.removeItem(this.STORAGE_KEY); }
    }
  }

  async loadUsers() {
    if (this.usersCache) return this.usersCache;
    const data = await this.http.get<{ users: any[] }>('/assets/users.json').toPromise();
    this.usersCache = data?.users ?? [];
    return this.usersCache;
  }

  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'fixed-salt-for-demo-2026');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async login(username: string, password: string): Promise<boolean> {
    const users = await this.loadUsers();
    const hash = await this.hashPassword(password);
    const found = users.find(u => u.username === username && u.passwordHash === hash);
    if (!found) return false;
    const user: AppUser = { username: found.username, role: found.role, permissions: found.permissions };
    this.currentUser$.next(user);
    sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    return true;
  }

  logout() { this.currentUser$.next(null); sessionStorage.removeItem(this.STORAGE_KEY); }

  isAuthenticated(): boolean { return !!this.currentUser$.value; }

  hasPermission(perm: string): boolean { return !!(this.currentUser$.value && this.currentUser$.value.permissions?.includes(perm)); }

  getCurrentUser(): AppUser | null { return this.currentUser$.value; }
}
