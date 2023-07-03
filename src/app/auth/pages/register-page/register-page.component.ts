import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    password2: ['', [Validators.required]]
  })

  constructor( private fb: FormBuilder) { }
 
  ngOnInit(): void {
  }

  onSubmit(){
    // solo para que se dispare cuando los formularios han sido tocados y hacer uso de nuestro isValidField
    this.myForm.markAllAsTouched();
  }
}
