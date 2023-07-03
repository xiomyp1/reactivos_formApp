import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent implements OnInit {

  //public myForm2  = new FormGroup({
  //  favoriteGames: new FormArray([])
  //})

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })

  public newFavorite: FormControl = new FormControl('', [Validators.required])

  constructor( private fb: FormBuilder) { }

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray
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

  onAddToFavorites():void{
    if( this.newFavorite.invalid) return;
    console.log(this.newFavorite.value)

    const newGame = this.newFavorite.value;
    this.favoriteGames.push(
      this.fb.control( newGame, Validators.required)
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void{
    //removeAt es algo que viene de los arreglos
    this.favoriteGames.removeAt(index);
  }

  isValidFieldInArray(  formArray: FormArray, index: number){
    return formArray.controls[index].errors
    && formArray.controls[index].touched;
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
