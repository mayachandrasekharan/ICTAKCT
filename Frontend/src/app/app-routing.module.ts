import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacultyHomeComponent } from './pages/faculty-home/faculty-home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';
<<<<<<< Updated upstream
import { SidenavComponent } from './sidenav/sidenav.component';
import { RequireformComponent } from './pages/requireform/requireform.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRequirementsComponent } from './pages/view-requirements/view-requirements.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'sidenav',component:SidenavComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'faculty-home',component:FacultyHomeComponent},
                        {path:'navbar',component:NavbarComponent},
                        {path:'footer',component:FooterComponent},
<<<<<<< Updated upstream
                        {path:'requireform',component:RequireformComponent},
                        {path:'viewrequirements',component:ViewRequirementsComponent},
                        {path:'adminhome',component:AdminhomeComponent}
                         ];
=======
                        {path:'faculty-home',canActivate:[AuthGuard],component:FacultyHomeComponent},
                        {path:'requireform',canActivate:[AuthGuard],component:RequireformComponent}
                      ];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
