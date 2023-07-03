import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  constructor( private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }


  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value)
  }



}
