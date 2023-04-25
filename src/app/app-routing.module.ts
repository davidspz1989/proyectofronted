import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './core/guards/normal/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"    
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"admin",
    component:DashboardComponent,
    pathMatch:"full",
    children:[
      {
        path:"profile",
        component:ProfileComponent
      }
    ]
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    pathMatch:"full",
    canActivate:[NormalGuard]
  },
  {
    path:"**",
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
