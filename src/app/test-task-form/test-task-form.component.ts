import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordControlComponent } from '../password-control/password-control.component'
import { PasswordStrengthComponent } from '../password-strength/password-strength.component'
import { PasswordService } from '../password.service';


@Component({
	selector: 'app-test-task-form',
	standalone: true,
	imports: [ReactiveFormsModule, PasswordControlComponent, PasswordStrengthComponent],
	templateUrl: './test-task-form.component.html',
	styleUrl: './test-task-form.component.scss',
	providers:[
		PasswordService
	]
})
export class TestTaskFormComponent implements OnInit{

	//Initializing main form element
	testTaskForm: FormGroup;

	//Defining variable to be sent to the password-strength component, using @Input()
	passwordValue: string;
	

	//Implementing OnInit Interface, for subscribing on changes of form value
	ngOnInit(): void {
		this.testTaskForm.get('passwordGroup.password')?.valueChanges.subscribe((v)=>{this.passwordValue = v;})
	}

	//Defining callback submit function, to make sure all controls are filled correctly
	onSubmit(event: any = 'empty'){
		const controls = this.testTaskForm.controls
		if (this.testTaskForm.valid){
			console.log(JSON.stringify(this.testTaskForm.value) + '\nForm Submitted!')
			this.testTaskForm.reset()
			return;
		}
		console.error('Invalid form')
	}


	//Creating and initializing our main form, form groups and controls
	
	constructor(private fb: FormBuilder, private passwordService: PasswordService){
		this._createForm()
	};
	
	//Adding validators to our controls
	//Validators used: 'required', 'minLength', 'pattern(no whitespace symbols)'
	private _createForm(){
		this.testTaskForm = this.fb.group({
			passwordGroup: this.fb.group({
				password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^\S+$/)]] 
			})
		});
	};
}
