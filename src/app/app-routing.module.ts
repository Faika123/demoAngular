import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilsComponent } from './appareils/appareils.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: AuthentificationComponent, pathMatch:'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'appareils', component: AppareilsComponent},
  {path: 'auth', component: AuthentificationComponent},
  {path: '**', redirectTo: 'appareils'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
