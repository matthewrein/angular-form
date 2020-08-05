import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public input: any = {date: '2020-08-04'};
	public output: any = {};

	submit(): void {
		this.output = Object.assign({}, this.input);
	}
}
