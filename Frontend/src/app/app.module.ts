import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { LoginService } from './login.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthGuard } from './auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RequireformComponent } from './pages/requireform/requireform.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiserviceService } from './apiservice.service';
import { ViewRequirementsComponent } from './pages/view-requirements/view-requirements.component';
import { FacultynavComponent } from './facultynav/facultynav.component';
import { AddresponseComponent } from './pages/addresponse/addresponse.component';
import { FacultyhomeComponent } from './pages/facultyhome/facultyhome.component';
import { PastcurriculumComponent } from './pages/pastcurriculum/pastcurriculum.component';
import { MatIconModule } from '@angular/material/icon';
import { EditresponseComponent } from './pages/editresponse/editresponse.component';
import { AdmincurriculumComponent } from './pages/admincurriculum/admincurriculum.component';
import { AdmineditComponent } from './pages/adminedit/adminedit.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SidenavComponent,
    RequireformComponent,
    ViewRequirementsComponent,
    AdminhomeComponent,
    NavbarComponent,
    FacultynavComponent,
    AddresponseComponent,
    FacultyhomeComponent,
    PastcurriculumComponent,
    EditresponseComponent,
    AdmincurriculumComponent,
    AdmineditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [
    LoginService,AuthGuard,ApiserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
