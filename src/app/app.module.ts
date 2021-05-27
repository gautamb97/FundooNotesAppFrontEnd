import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { TitleComponent } from './components/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TitleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
