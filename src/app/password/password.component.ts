import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'app-password',
	standalone: true,
	imports: [NgIf, NgStyle],
	templateUrl: './password.component.html',
	styleUrl: './password.component.scss'
})
export class PasswordComponent {

	//Creating a regular expressions, to test does password includes letters||sybmbols||digits
	lettersRegex = /[a-z]+/i;
	symbolsRegex = /[!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~]+/;
	digitsRegex = /\d+/;

	//Defining a variable that indicates, when password should be visible to user
	visible = false;

	//Making an object, that contains colors for each strength indicator section
	strengthIndicator = {
		section_1: '#c8c8c8',
		section_2: '#c8c8c8',
		section_3: '#c8c8c8',
	}
	
	//Creating function to check strength of the current user password(in real time)
	strengthCheck(password: string){

		//Increasing variable strengthLvl depending on the password strength level
		let strengthLvl = 0; 
		
		if (password.length>1){
			strengthLvl++
			if(password.length>=8){
				if(this.lettersRegex.test(password)){
					strengthLvl++;
				}
				if(this.symbolsRegex.test(password)){
					strengthLvl++;
				}
				if(this.digitsRegex.test(password)){
					strengthLvl++;
				}
			}
		}

		//Changing the colors of the indicator depending on the value of strengthLvl variable
		switch(strengthLvl){
			case 0:
				this.strengthIndicator.section_1 = '#c8c8c8';
				this.strengthIndicator.section_2 = '#c8c8c8';
				this.strengthIndicator.section_3 = '#c8c8c8';
				break;
			case 1:
				this.strengthIndicator.section_1 = '#e24114'
				this.strengthIndicator.section_2 = '#e24114'
				this.strengthIndicator.section_3 = '#e24114'
				break;
			case 2:
				this.strengthIndicator.section_1 = '#e24114';
				this.strengthIndicator.section_2 = '#c8c8c8';
				this.strengthIndicator.section_3 = '#c8c8c8';
				break;
			case 3:
				this.strengthIndicator.section_1 = '#f6eb15';
				this.strengthIndicator.section_2 = '#f6eb15';
				this.strengthIndicator.section_3 = '#c8c8c8';
				break;
			case 4:
				this.strengthIndicator.section_1 = '#1bbc12';
				this.strengthIndicator.section_2 = '#1bbc12';
				this.strengthIndicator.section_3 = '#1bbc12';
				break;
			default:
				throw new Error('Password strength level isn\'t defined, or defined in the wrong way');
		}
	}
}import { EventEmitter } from 'stream';

