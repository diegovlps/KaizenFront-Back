import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { ReclutadorSigninRequest } from './reclutador-signin-interface';
import { ReclutadorSigninService } from './reclutador-signin.service';
//import { PostulanteSigninService } from './postulante-signin.service';
//import { PostulanteSigninRequest } from './postulante-signin-interface';



@Component({
  selector: 'app-reclutador-signin',
  templateUrl: './reclutador-signin.component.html',
  styles: []
})

export class ReclutadorSigninComponent implements OnInit {

     
  public reclutadorloginForm = this.fb.group({     
    
    emailUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),        
  
    //TODO: Regex Contraseña 
    contraseñaUsuario: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.pattern("")
    ]))   
  
  });

  constructor(private tokenstorageservice:TokenStorageService
                ,private Reclutador:ReclutadorSigninService
                ,private fb: FormBuilder) {
   }


  ngOnInit(): void {
    
  }
  
  IngresoLoginR(): void {
    
    var usuario: ReclutadorSigninRequest = {
      emailUsuario: this.reclutadorloginForm.controls['emailUsuario'].value,
      contraseñaUsuario: this.reclutadorloginForm.controls['contraseñaUsuario'].value
    }

    this.Reclutador.SignInReclutador(usuario).subscribe(
      data => {
        this.tokenstorageservice.saveToken(data.token);
        this.tokenstorageservice.saveUser(data);
        console.log(data);
    });
  }

}
