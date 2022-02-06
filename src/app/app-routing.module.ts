import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'mylogin',component: LoginComponent},
  { path: 'about',component: AboutComponent},
  { path:'register',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
