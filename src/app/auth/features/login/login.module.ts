import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { GoogleButtonComponent } from 'src/app/ui/google-button/google-button.component';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    GoogleButtonComponent,
    ReactiveFormsModule
  ],
  declarations: [LoginPage],
  providers: [AuthService]
})
export class LoginPageModule {}
