import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ThemeService } from '@services/theme.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { spinnerInterceptor } from '@interceptors/spinner.interceptor';
import { SpinnerService } from '@services/spinner.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ThemeService,
    SpinnerService,
    HttpClientModule,
    provideHttpClient(
      withInterceptors([spinnerInterceptor]),
    )
  ]
};
