import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PublicacionComponent} from './publicacion/publicacion.component';
import { PostulacionComponent} from './postulacion/postulacion.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaempleosComponent } from './listaempleos/listaempleos.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetalletrabajoComponent } from './detalletrabajo/detalletrabajo.component';



@NgModule({
  declarations: [
    PublicacionComponent,
    PostulacionComponent,
    ListaempleosComponent,
    HomeComponent,
    DetalletrabajoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PuestoTrabajoModule { }