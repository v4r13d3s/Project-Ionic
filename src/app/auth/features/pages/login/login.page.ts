import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; // Importa ToastController
import { AuthService } from '../../auth.service';

export interface FormSignIn {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage {
  password: string = '';
  passwordType: string = 'password';
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _toastController = inject(ToastController); // Inyecta ToastController

  loginMethod: 'firebase' | 'api' = 'firebase';

  form = this._formBuilder.group<FormSignIn>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) {
      this.showToast('Por favor, completa todos los campos correctamente.', 'danger');
      return;
    }

    const { email, password } = this.form.value;
    const correo = email || ''; // Cambio de nombre para coincidir con tu API

    if (!correo || !password) {
      this.showToast('Por favor, proporciona un correo electrónico y una contraseña.', 'danger');
      return;
    }

    try {
      if (this.loginMethod === 'firebase') {
        // Lógica existente de Firebase
        const isEmailInFirestore = await this._authService.isEmailInFirestore(correo);
        if (isEmailInFirestore) {
          await this._authService.signIn({ email: correo, password: password || '' });
          this.showToast('Inicio de sesión exitoso', 'success');
          this._router.navigateByUrl('/home');
        } else {
          this.showToast('El correo no está registrado.', 'danger');
        }
      } else {
        // Nueva lógica para API REST
        await this._authService.signInWithApi(correo, password || '');
        this.showToast('Inicio de sesión exitoso', 'success');
        this._router.navigateByUrl('/home');
      }
    } catch (error: any) {
      this.showToast(error.message || 'Error al iniciar sesión', 'danger');
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      this.showToast('Bienvenido', 'success');
      this._router.navigateByUrl('/home');
    } catch (error) {
      this.showToast('Ocurrió un error al iniciar sesión con Google', 'danger');
    }
  }

  // Método para mostrar toasts
  async showToast(message: string, color: string = 'primary') {
    const toast = await this._toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color,
      cssClass: `toast-${color}`, // Opcional: puedes agregar clases CSS personalizadas
    });

    await toast.present();
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  
}