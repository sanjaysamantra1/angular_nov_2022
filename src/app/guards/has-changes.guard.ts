import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasChangesGuard implements CanDeactivate<unknown> {
  flag: boolean = false;
  canDeactivate() {
    if (this.flag) {
      alert('There are unsaved changes, save them');
      return false;
    } else {
      return true;
    }
  }
}
