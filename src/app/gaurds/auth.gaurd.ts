import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	CanDeactivate
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthService,
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		let isAuthenticated = this.authService.getAuthStatus();
		if (isAuthenticated) {
			if(state.url === '/login') {
				this.router.navigate(['/dashboard']);
				return false;
			}
		} else {
			if(state.url != '/login') {
				this.router.navigate(['/login']);
				return false;
			};
		}

		return true;
	}
}
