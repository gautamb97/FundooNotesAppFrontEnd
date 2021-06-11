import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from '../app/pages/registration/registration.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../app/pages/reset-password/reset-password.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IsTrashedComponent } from './components/is-trashed/is-trashed.component';

const routes: Routes = [
  { path: '', component : RegistrationComponent },
  { path: 'register', component : RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'resetPassword/:token', component: ResetPasswordComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: CreateNoteComponent },
    { path: 'notes', component: CreateNoteComponent },
    { path: 'trash', component: IsTrashedComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
