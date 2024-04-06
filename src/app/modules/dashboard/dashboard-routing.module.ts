import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] = [
	{
		path: '',
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				pathMatch: 'full',
			},
			{ path: '', component: DashboardComponent },
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
