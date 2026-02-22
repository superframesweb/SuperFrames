import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appRouterProvider } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations(), appRouterProvider]
}).catch(err => console.error(err));
