import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninModule } from './pages/signin/signin.module';
import { SignupModule } from './pages/signup/signup.module';
import { authInterceptorProviders } from './util/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './pages/login/login.module';
import { PasswordModule } from './pages/password/password.module';
import { PuestoTrabajoModule } from './pages/puestostrabajo/puestotrabajo.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SigninModule,
    SignupModule,
    LoginModule,
    NgbModule,
    PasswordModule,
    PuestoTrabajoModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
