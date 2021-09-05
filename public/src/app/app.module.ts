import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SanitizePipe } from './pipe/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    SanitizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
