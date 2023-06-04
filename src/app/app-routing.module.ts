import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './core/guards/normal/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';

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
    children:[
      {
        path:"profile",
        component:ProfileComponent
      },
      {
        path:"", // notar como llama al componente
        component:WelcomeComponent
      },
      {
        path:"categorias",
        component:ViewCategoriasComponent
      },
      {
        path:"add-categoria",
        component:AddCategoriaComponent
      },
      {
        path:"examenes",
        component:ViewExamenesComponent
      },
      {
        path:"add-examen",
        component:AddExamenComponent
      },
      {
        // NOTAR COMO SE LLAMA CONFORME AL id
        path:"examen/:examenId",
        component:ActualizarExamenComponent
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
