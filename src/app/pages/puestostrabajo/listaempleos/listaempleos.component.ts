import { Component, OnInit } from '@angular/core';
import {ListaempleosService} from './listaempleos.service';

@Component({
  selector: 'app-listaempleos',
  templateUrl: './listaempleos.component.html',
  styleUrls: []
})
export class ListaempleosComponent implements OnInit {
  p : number = 1 ;
  CurrentEmpleo:any = [];

  constructor(private lista:ListaempleosService) { }

  ngOnInit(): void {
    this.getListaempleos();
  }

  getListaempleos(){
    
      this.lista.getLista().subscribe(
      data => {
        this.CurrentEmpleo = data;
        console.log(this.CurrentEmpleo);
      },
      error => {
        console.log(error);
      });
    }
}
