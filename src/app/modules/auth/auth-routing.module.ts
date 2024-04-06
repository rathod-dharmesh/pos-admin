import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Route[] = [
	{
		path: '',
		children: [
			{ path: 'register', component: RegisterComponent },
			{ path: 'login', component: LoginComponent },
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
