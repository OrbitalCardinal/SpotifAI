import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '@services/spinner.service';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  let spinerService = inject(SpinnerService)
  spinerService.addRequest();
  return next(req).pipe(finalize(() => {
    spinerService.removeRequest();
  }));
};
