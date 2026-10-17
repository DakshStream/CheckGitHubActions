import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
