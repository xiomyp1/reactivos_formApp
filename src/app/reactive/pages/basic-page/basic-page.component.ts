import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

const rtx5090 = {
  name: 'Pokebola 2000',
  price: 25000,
  inStorage: 6
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  ngOnInit(): void {
    this.myForm.reset( rtx5090 );
  }

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })
  public myForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    price: [ 0, [
      Validators.required,
      Validators.min(2)
    ]],
    inStorage: [0, [
      Validators.required,
      Validators.min(1)
    ]],
  })
  constructor( private fb: FormBuilder ){

  }

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  //Aquí tenemos que hacer varias cosas, tenemos que recibir el campo que queremos evaluar
  getFieldError( field: string): string | null {
    //aqui pregunto si myform controls si no tiene el field  por eso el signo de admiracion para hacer
    // la negacion que me esta preguntando la persona si no exite no retorno nada.
    if (!this.myForm.controls[field]) return null;

    //Tomemos el objeto de los errores  el cual tiene todos los errores posibles del input que estoy especificacion
    // si no viene regresamos un objeto vacio
    const errors = this.myForm.controls[field].errors || {};

    // Hacemos un for Voy a tener la llave y quiero sacar todas las llaves que vienen en los errores o en ese objeto.
    for(const key of Object.keys(errors)){
      switch( key ){
        case 'required':
          return 'Este campo es requerido';
        case 'minlengh':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`
      }
    }
    return null;
  }

  onSave():void{
    //si this myform es invalido  no es correcto no retorno nada 
    if(this.myForm.invalid) return;
    console.log(this.myForm.value)
    this.myForm.reset({price:0, inStorage: 0});
  }
}
