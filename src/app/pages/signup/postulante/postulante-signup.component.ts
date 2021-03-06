import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostulanteSignupService } from './postulante-signup.service';
import { PostulanteSignupRequest } from './postulante-signup-interface';
import { Ciudades, Sexos, TiposDocumento } from '../../../util/data-lists';
import { Router} from '@angular/router'

@Component({
  selector: 'app-postulante-signup',
  templateUrl: './postulante-signup.component.html',
  styles: []
})
export class PostulanteSignupComponent implements OnInit{

  //Lista de Ciudades ordenados por Nombre creado en util/data-lists
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

  //Lista de Tipos de Documento
  TiposDocumento = TiposDocumento;

  //Lista de Sexos
  Sexos = Sexos;

  public postulantesignupForm = this.fb.group({
    nombreUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern("([a-zA-Z',.-]+( [a-zA-Z',.-]+)*)")
    ])),

    apellidoUsuario: new FormControl('', Validators.compose([
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

    tipodocumentoUsuario: new FormControl('', 
    Validators.required),
    
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
    
    generoUsuario: new FormControl('', 
    Validators.required),
    
    imagenUsuario: new FormControl(null),
    archivocvUsuario: new FormControl(null)
  });
  
  constructor(private fb: FormBuilder,
              private postulantesignupService: PostulanteSignupService,
              private route:Router) { }

  ngOnInit(): void {}

  signupSuccess = false;
  errorMessage = '';

  selectedFotosPerfil?: FileList;
  currentFotoPerfil?: File;

  selectedArchivoCV?: FileList;
  currentArchivoCV?: File;

  seleccionarFotoPerfil(event: any): void {
    this.selectedFotosPerfil = event.target.files;
  }

  seleccionarArchivoCV(event: any): void {
    this.selectedArchivoCV = event.target.files;
  }

  subirFotoPerfil(): any {
    if (this.selectedFotosPerfil) {
      const fotoperfil: File | null = this.selectedFotosPerfil.item(0);

      if (fotoperfil) {
        this.currentFotoPerfil = fotoperfil;
      }

      return this.currentFotoPerfil;
    }
  }

  subirArchivoCV(): any {
    if (this.selectedArchivoCV) {
      const archivocv: File | null = this.selectedArchivoCV.item(0);

      if (archivocv) {
        this.currentArchivoCV = archivocv;
      }

      return this.currentArchivoCV;
    }
  }

  guardarPostulante(): void {

    var usuario: PostulanteSignupRequest = {
      nombreUsuario: this.postulantesignupForm.controls['nombreUsuario'].value,
      apellidoUsuario: this.postulantesignupForm.controls['apellidoUsuario'].value,
      ciudadUsuario: this.postulantesignupForm.controls['ciudadUsuario'].value,
      emailUsuario: this.postulantesignupForm.controls['emailUsuario'].value,
      tipodocumentoUsuario: this.postulantesignupForm.controls['tipodocumentoUsuario'].value,
      numerodocumentoUsuario: this.postulantesignupForm.controls['numerodocumentoUsuario'].value,
      contraseñaUsuario: this.postulantesignupForm.controls['contraseñaUsuario'].value,
      generoUsuario: this.postulantesignupForm.controls['generoUsuario'].value
    }

    this.postulantesignupService.SignUpPostulante(usuario, this.subirFotoPerfil(), this.subirArchivoCV()).subscribe(
      data => { 
        console.log(data);
        this.route.navigate(['signin/postulante']);
        this.signupSuccess = true; 
      },

      err => {
        this.errorMessage = err.error.message;
        this.signupSuccess = false;
      }
    );
  }
}
