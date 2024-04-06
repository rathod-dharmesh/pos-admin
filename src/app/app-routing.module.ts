import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

const sessionRoutes = ['/login', '/register'];

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./modules/dashboard/dashboard.module').then(
				m => m.DashboardModule
			),
	},
	{
		path: '',
		loadChildren: () =>
			import('./modules/auth/auth.module').then(m => m.AuthModule),
	},
	//{ path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor(private router: Router) {
		//this.redirectBasedOnToken();
	}

	private redirectBasedOnToken(): void {
		const token = localStorage.getItem('token');
		const currentActivePath = window.location.pathname;

		if (token && sessionRoutes.includes(currentActivePath)) {
			this.router.navigateByUrl('/dashboard');
		} else if (token || sessionRoutes.includes(currentActivePath)) {
			this.router.navigateByUrl(currentActivePath);
		} else {
			this.router.navigateByUrl('/login');
		}
	}
}
