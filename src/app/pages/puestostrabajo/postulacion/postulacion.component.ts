import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {PostulacionService} from './postulacion.service';
import {TokenStorageService} from 'src/app/util/token-storage.service'

@Component({
  selector: 'app-postulacion',
  templateUrl: './postulacion.component.html',
  styleUrls: ['./postulacion.component.css']
})
export class PostulacionComponent implements OnInit {

  currentUser:any;
  public puestostrabajoform = this.fb.group({     
    
    idpuestotrabajo: new FormControl('', Validators.compose([
      Validators.required
    ]))
  });
  constructor(private fb:FormBuilder,
              private postulacionservice:PostulacionService,
              private tokens:TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokens.getUser();
  }

  Postularempleo(): void {
    
    var work: any = {
      idpuestotrabajo: this.puestostrabajoform.controls['idpuestotrabajo'].value
    }

    this.postulacionservice.Publicar(this.currentUser.idPostulante,work.idpuestotrabajo).subscribe(
      data => {
        console.log(data);
    });
  }
}
