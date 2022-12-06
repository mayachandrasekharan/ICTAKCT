import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacultyHomeComponent } from './pages/faculty-home/faculty-home.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'signup',component:SignupComponent},
                        {path:'header',component:HeaderComponent},
                        {path:'footer',component:FooterComponent},
                        {path:'faculty-home',canActivate:[AuthGuard],component:FacultyHomeComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
