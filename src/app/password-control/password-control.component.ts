import { NgIf } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'app-password-control',
	standalone: true,
	imports: [NgIf],
	templateUrl: './password-control.component.html',
	styleUrl: './password-control.component.scss',
	providers: [
		{
		  provide: NG_VALUE_ACCESSOR,
		  multi:true,
		  useExisting: forwardRef(() => PasswordControlComponent)
		},
	  ],
})
export class PasswordControlComponent implements ControlValueAccessor{

	//Defining a variable that indicates, when password should be visible to user
	visible = false;

	//Creating a variable to set value for input, if needed. Default - empty string
	value:string = '';
	
	
	//Initializing input from parent element, for label element, and placeholder attribute for input
	@Input() label: string;
	@Input() placeholder: string;


	
	//Implementing ControlValueAccessor interface

	//Definig onChange() callback function, for the cases when it is called, before registerOnChange() initialization
	onChange = (value: string) => {
	};
	onTouched = () => {
	};
	writeValue(value: string): void {
		this.value = value
	};
	registerOnTouched(onTouched: any): void {
		this.onTouched = onTouched
	};
	registerOnChange(onChange: any){
		this.onChange = onChange
	}
	setDisabledState(isDisabled: false): void {
	}
}

