import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RequireformComponent } from './pages/requireform/requireform.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRequirementsComponent } from './pages/view-requirements/view-requirements.component';
import { AddresponseComponent } from './pages/addresponse/addresponse.component';
import { FacultyhomeComponent } from './pages/facultyhome/facultyhome.component';
import { PastcurriculumComponent } from './pages/pastcurriculum/pastcurriculum.component';
import { EditresponseComponent } from './pages/editresponse/editresponse.component';
import { AdmincurriculumComponent } from './pages/admincurriculum/admincurriculum.component';
import { AdmineditComponent } from './pages/adminedit/adminedit.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'sidenav',component:SidenavComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'navbar',component:NavbarComponent},
                        {path:'footer',component:FooterComponent},
                        {path:'requireform',component:RequireformComponent},
                        {path:'viewrequirements',component:ViewRequirementsComponent},
                        {path:'adminhome',component:AdminhomeComponent},
                        {path:'addresponse',component:AddresponseComponent},
                        {path:'facultyhome',component:FacultyhomeComponent},
                        {path:'pastcurriculum',component:PastcurriculumComponent},
                        {path:'editresponse',component:EditresponseComponent},
                        {path:'admincurriculum',component:AdmincurriculumComponent},
                        {path:'adminedit',component:AdmineditComponent}
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
