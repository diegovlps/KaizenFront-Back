import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PostulanteComponent} from './postulante/postulante.component'
import { ReclutadorComponent} from './reclutador/reclutador.component'
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    PostulanteComponent,
    ReclutadorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginModule { }