import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

  // polyfill TextEncoder for IE Edge 
  // I dont know why this can't be placed in polyfills.ts but the login system doesnt work if it is placed in there
  // LOL what
  import { TextEncoder } from 'text-encoding';
  if (typeof (window as any).TextEncoder === 'undefined') {
    (window as any).TextEncoder = TextEncoder;
  }

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

