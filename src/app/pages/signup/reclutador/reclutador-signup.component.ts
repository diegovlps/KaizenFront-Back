import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { ReclutadorSignupRequest } from './reclutador-signup-interface';
import { ReclutadorSignupService } from './reclutador-signup.service';
import { Ciudades, Tempresa } from '../../../util/data-lists';


@Component({
  selector: 'app-reclutador-signup',
  templateUrl: './reclutador-signup.component.html',
  styles: []
})

export class ReclutadorSignupComponent implements OnInit {

  selectedLogo?: FileList;
  currentLogo?: File;

  Ciudades = Ciudades.sort(function (a, b) {
    if (a.text > b.text) {
      return 1;
    }

    if(a.text < b.text) {
      return -1;
    }

    else {
      return 0;
    }
  })

  Tempresas = Tempresa ;
   
  seleccionarLogo(event: any): void{
    this.selectedLogo = event.target.files;
  }

  subirLogo(): any {
    if (this.selectedLogo) {
      const fotologo: File | null = this.selectedLogo.item(0);

      if (fotologo) {
        this.currentLogo = fotologo;
      }

      return this.currentLogo;
    }
  }


//validaciones
public reclutadorsignupForm = this.fb.group({
  nombreUsuario: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)")
  ])),

  ciudadUsuario: new FormControl('', 
  Validators.required),
  
  emailUsuario: new FormControl('', Validators.compose([
    Validators.required,
    Validators.email
  ])),
  
  numerodocumentoUsuario: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12),
    Validators.pattern("^[0-9]*$")
  ])),

  //TODO: Regex Contraseña 
  contraseñaUsuario: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.pattern("")
  ])),

  nombrecontactanteUsuario: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
    Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)")
  ])),
  
  tamañoempresaUsuario: new FormControl('', 
  Validators.required),  

  imagenUsuario: [null]

});
  

  constructor(private fb: FormBuilder,
              private reclutadorsignupServie: ReclutadorSignupService) { }

  ngOnInit(): void {
  }

  signupSuccess = false;
  errorMessage = '';

  guardarReclutador(): void {

    var usuario: ReclutadorSignupRequest = {
      nombreUsuario: this.reclutadorsignupForm.controls['nombreUsuario'].value,
      ciudadUsuario: this.reclutadorsignupForm.controls['ciudadUsuario'].value,
      emailUsuario: this.reclutadorsignupForm.controls['emailUsuario'].value,
      numerodocumentoUsuario: this.reclutadorsignupForm.controls['numerodocumentoUsuario'].value,      
      contraseñaUsuario: this.reclutadorsignupForm.controls['contraseñaUsuario'].value,
      nombrecontactanteUsuario: this.reclutadorsignupForm.controls['nombrecontactanteUsuario'].value,
      tamañoempresaUsuario: this.reclutadorsignupForm.controls['tamañoempresaUsuario'].value
    }

    //var logoempresa: File;
    //logoempresa = this.reclutadorsignupForm.controls['imagenUsuario'].value;

    this.reclutadorsignupServie.SignUpReclutador(usuario, this.subirLogo()).subscribe(
      data => { 
        console.log(data);
        this.signupSuccess = true; 
      },

      err => {
        this.errorMessage = err.error.message;
        this.signupSuccess = false;
      }
    );
  }
}


/* 

public postulanteLogin = this.fb.group({
guardarUser(): void {

    var usuario: PostulanteSignupRequest = {
      emailUsuario: this.postulanteLogin.controls['emailUsuario'].value,
      contraseñaUsuario: this.postulanteLogin.controls['contraseñaUsuario'].value,
    } )}*/