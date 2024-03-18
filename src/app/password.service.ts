import { Injectable } from '@angular/core';
import { PasswordControlComponent } from './password-control/password-control.component';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

	//Creating main strength logic variable, that indicates, how strong is our password
	//Is being on change by _strengthCheck() private function
	private _strengthLvl:number = 0;

	//Creating a regular expressions, to test does password includes letters||sybmbols||digits
	private strengthValidators = {
			lettersRegex: RegExp(/[a-z]+/i),
			symbolsRegex: RegExp(/[!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~]+/),
			digitsRegex: RegExp(/\d+/),
	};

	//RegExp to check does password contain whitespace symbols
	private	whitespaceCheck: RegExp = (/\s/);


	//Creating function to check strength of the current user password(in real time)
  	private _strengthCheck(password: string){

		//Increasing variable _strengthLvl depending on the password strength level

		//Level 1
		//Password must contain no less then one character
		this._strengthLvl = 0; 
		if (password.length<1){
			return;
		}
		this._strengthLvl++

		//Validation check
		//Password lenght must be equal, or higher then 8
		//Password mustn't contain any whitespace symbols
		if(password.length<8 || this.whitespaceCheck.test(password)){
			return;
		}

		//Level 2-4
		//Strength check, by strengthValidators
		for (let key in this.strengthValidators){
			let validator:RegExp = this.strengthValidators[key as keyof object]
			validator.test(password)?this._strengthLvl++:{};
		}
	}

	//Publicversion of _strengthCheck function, to make sure that no one's gonna change it
	public strengthCheck(password: string){
		this._strengthCheck(password)
		return this._strengthLvl
	}

	//Getter for _strengthLvl
	get strengthLvl(){
		return this._strengthLvl
	}
}
