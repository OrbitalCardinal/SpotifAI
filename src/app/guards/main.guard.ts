import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const mainGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const creds = localStorage.getItem('spotifai-creds');
  if (creds) {
    return true;
  } else {
    router.navigate(['/auth']);
  }
  return false;
};
