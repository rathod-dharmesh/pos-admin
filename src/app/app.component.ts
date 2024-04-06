import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	title = 'posAdmin';
	permissionStatus: boolean = false;
	positionSubscription: Subscription | undefined;

	constructor(private router: Router) {}

	ngOnInit() {}
	ngOnDestroy(): void {}
}
