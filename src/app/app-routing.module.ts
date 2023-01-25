import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NaveComponent } from './nave/nave.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path:'',component:NaveComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'lista', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
