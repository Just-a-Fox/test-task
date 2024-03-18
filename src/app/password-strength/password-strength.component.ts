import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent implements OnChanges {

  	strengthLvl: number = 0;

	@Input() passwordValue: string;
	
	//When passwordValue is on change we're updating our strength level variable, depending on the new password value sent from form
	ngOnChanges(changes: SimpleChanges): void {
		this.strengthLvl = this.passwordService.strengthCheck(changes['passwordValue'].currentValue || '')
	}

	//Making an object, that contains colors for each strength indicator section
	colorPalette = {
		grey: '#c8c8c8',
		red: '#e24114',
		yellow: '#f6eb15',
		green: '#1bbc12',
	}

	//Making an array of color combinations for password strength indicators
	colorCombinations = [
		[this.colorPalette.grey, this.colorPalette.grey, this.colorPalette.grey],
		[this.colorPalette.red,this.colorPalette.red,this.colorPalette.red],
		[this.colorPalette.red, this.colorPalette.grey, this.colorPalette.grey],
		[this.colorPalette.yellow, this.colorPalette.yellow, this.colorPalette.grey],
		[this.colorPalette.green, this.colorPalette.green, this.colorPalette.green],
	]


	//Getting our service for password
	constructor(private passwordService: PasswordService){}
}
