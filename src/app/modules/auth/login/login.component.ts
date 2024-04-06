import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
	//variable area

	constructor(
		private router: Router,
		private formBuilder: FormBuilder
	) {}

	ngOnInit(): void {}

	initializeLoginForm(): void {}

	onSubmit(): void {}
}
