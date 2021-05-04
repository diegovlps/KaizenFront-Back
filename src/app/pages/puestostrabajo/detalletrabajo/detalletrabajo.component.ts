import { Component, OnInit, Input } from '@angular/core';
import {DetalletrabajoService} from './detalletrabajo.service';
import {TokenStorageService} from 'src/app/util/token-storage.service'

@Component({
  selector: 'app-detalletrabajo',
  templateUrl: './detalletrabajo.component.html',
  styleUrls: ['./detalletrabajo.component.css']
})
export class DetalletrabajoComponent implements OnInit {
  currentDetalleLista:any = [];
  constructor(private detalle:DetalletrabajoService, private tokens:TokenStorageService) { }

  ngOnInit(): void {
    this.getdetalleEmpleo();
  }

  getdetalleEmpleo(){
    
    this.detalle.getdetalleLista(this.tokens.getTokenjob()).subscribe(
    data => {
      this.currentDetalleLista = data;
      console.log(this.currentDetalleLista);
    },
    error => {
      console.log(error);
    });
  }

}
