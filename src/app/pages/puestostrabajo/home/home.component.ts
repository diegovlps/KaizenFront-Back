import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router'
import {TokenStorageService} from 'src/app/util/token-storage.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  p : number = 1 ;
  CurrentLista:any = [];
  CurrentDetalleLista:any;
  constructor(private homeservice:HomeService, private route:Router,private tokens:TokenStorageService) { }

  ngOnInit(): void {
    this.getListaempleos();
  }

  getListaempleos(){
    
    this.homeservice.getListaparams().subscribe(
    data => {
      this.CurrentLista = data;
      console.log(this.CurrentLista);
    },
    error => {
      console.log(error);
    });
  }

  getListaempleospart(){
    
    this.homeservice.getListaparamspart().subscribe(
    data => {
      this.CurrentLista = data;
      console.log(this.CurrentLista);
    },
    error => {
      console.log(error);
    });
  }

  getListaempleosfull(){
    
    this.homeservice.getListaparamsfull().subscribe(
    data => {
      this.CurrentLista = data;
      console.log(this.CurrentLista);
    },
    error => {
      console.log(error);
    });
  }

  Seleccionarempleo(empleo:any) {
    this.CurrentDetalleLista = empleo;
  }

  verDetalle(){
    this.tokens.saveTokenjob(this.CurrentDetalleLista.idPuestoTrabajo);
    this.route.navigate(['puestrotrabajo/'+this.CurrentDetalleLista.idPuestoTrabajo+'/detail']);
  }

}



