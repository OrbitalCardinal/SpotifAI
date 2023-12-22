import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const rootGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const creds = localStorage.getItem('spotifai-creds');
  if(creds) {
    router.navigate(['/main']);
    return false;
  }
  return true;
};
