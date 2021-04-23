import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/util/token-storage.service';
import { FormBuilder} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

import {PostulanteService} from './postulante.service'

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styleUrls: ['./postulante.component.css']
})
export class PostulanteComponent implements OnInit {
  CurrentUserparam:any;
  CurrentUser:any;
  idPostulante:any;
  isLoginFailed = false;

  constructor(private tokens:TokenStorageService,
     private FormBuilder:FormBuilder,
      private router:Router,
      private PostulanteService:PostulanteService,
      private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserparam();
   this.autenticacion();
   
  }

  getUserparam(){
    this.CurrentUser = this.tokens.getUser();
    this.idPostulante = this.CurrentUser.idPostulante;
    this.PostulanteService.get(this.CurrentUser.idPostulante).subscribe(
      data => {
        this.CurrentUserparam = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
      debugger
  }
  
  autenticacion(){
    
       this.getUserparam();
       this.isLoginFailed = true;
    
  }
  
  Salir(){
    this.tokens.signOut();
    this.router.navigate(['/signin/postulante'])
  }

}
