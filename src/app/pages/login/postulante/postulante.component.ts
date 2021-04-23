import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { FormBuilder} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {PostulanteBasicInfoResponse} from 'src/app/pages/signin/postulante/postulante-signin-interface'
import {PostulanteService} from './postulante.service'

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styleUrls: ['./postulante.component.css']
})
export class PostulanteComponent implements OnInit {
  CurrentUserparam:any = [];
  Usuario:PostulanteBasicInfoResponse = {
    nombrePostulante : '',
    apellidoPostulante: '',
    ciudadPostulante: '',
    tipodocumentoPostulante: '',
    numerodocumentoPostulante: '',
    fecharegistroPostulante:'',
    generoPostulante: ''
  };
  CurrentUser:any;
  idPostulante:any;
  isLoginFailed = false;
  
  constructor(private tokens:TokenStorageService,
     private FormBuilder:FormBuilder,
      private router:Router,
      private PostulanteService:PostulanteService,
      private route:ActivatedRoute) {}

  ngOnInit(): void {
   this.getUserparam();
   this.autenticacion();
  }

  getUserparam(){
    this.CurrentUser = this.tokens.getUser();
    var link = this.router.navigate(['/login/postulante/profile/basicinfo/'+this.CurrentUser.idPostulante]);
    if( link!= link){
      this.router.navigate(['/signup/postulante']);
    }else{
      this.idPostulante = this.CurrentUser.idPostulante;
    this.PostulanteService.get(this.CurrentUser.idPostulante).subscribe(
      data => {
        this.CurrentUserparam = data;
        this.Usuario.nombrePostulante = this.CurrentUserparam.nombrePostulante,
        this.Usuario.apellidoPostulante = this.CurrentUserparam.apellidoPostulante,
        this.Usuario.ciudadPostulante = this.CurrentUserparam.ciudadPostulante,
        this.Usuario.numerodocumentoPostulante = this.CurrentUserparam.numerodocumentoPostulante,
        this.Usuario.tipodocumentoPostulante = this.CurrentUserparam.tipodocumentoPostulante,
        this.Usuario.generoPostulante = this.CurrentUserparam.generoPostulante,
        this.Usuario.fecharegistroPostulante = this.CurrentUserparam.fecharegistroPostulante
        console.log(this.Usuario);
      });
    } 
  }
  
  autenticacion(){
       
       if(this.tokens.getToken()){
         this.isLoginFailed = true;
       }else{
         this.Salir();
       }
       
  }
  
  Salir(){
    this.tokens.signOut();
    this.router.navigate(['/signin/postulante'])
  }

}
