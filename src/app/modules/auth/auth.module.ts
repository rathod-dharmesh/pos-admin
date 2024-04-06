import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/modules/auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
	declarations: [AuthComponent, LoginComponent, RegisterComponent],
	imports: [CommonModule, AuthRoutingModule, RouterModule, FormsModule],
})
export class AuthModule {}
