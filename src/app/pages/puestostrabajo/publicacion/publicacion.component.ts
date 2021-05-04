import { Component, OnInit } from '@angular/core';
import {PublicacionService} from './publicacion.service';
import {TokenStorageService} from 'src/app/util/token-storage.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  currentUser:any;
  currentUserparam:any;

  public puestostrabajoform = this.fb.group({     
    
    nombrePuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required])), 
    ciudadPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required])), 
    categoriaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])),
    trabajoremotoPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required])),   
    tipojornadaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required])), 
    sueldoPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    experienciaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    descripcionPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])),
    periodopublicidadPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required]))
  });

  constructor(private publicacionservice:PublicacionService,
              private fb:FormBuilder,
              private tokens:TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokens.getUser();
  }

  Publicarempleo(): void {
    
    var puestowork: any = {
      nombrePuestoTrabajo: this.puestostrabajoform.controls['nombrePuestoTrabajo'].value,
      ciudadPuestoTrabajo: this.puestostrabajoform.controls['ciudadPuestoTrabajo'].value,
      categoriaPuestoTrabajo: this.puestostrabajoform.controls['categoriaPuestoTrabajo'].value,
      trabajoremotoPuestoTrabajo: this.puestostrabajoform.controls['trabajoremotoPuestoTrabajo'].value,
     tipojornadaPuestoTrabajo: this.puestostrabajoform.controls['tipojornadaPuestoTrabajo'].value,
     sueldoPuestoTrabajo: this.puestostrabajoform.controls['sueldoPuestoTrabajo'].value,
     experienciaPuestoTrabajo: this.puestostrabajoform.controls['experienciaPuestoTrabajo'].value,
     descripcionPuestoTrabajo: this.puestostrabajoform.controls['descripcionPuestoTrabajo'].value,
      periodopublicidadPuestoTrabajo: this.puestostrabajoform.controls['periodopublicidadPuestoTrabajo'].value
    }

    this.publicacionservice.Publicar(puestowork,this.currentUser.idReclutador).subscribe(
      data => {
        console.log(data);
    });
  }

}
