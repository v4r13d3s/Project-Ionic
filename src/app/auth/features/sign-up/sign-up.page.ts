import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController, ModalController } from '@ionic/angular';
import { DateTime } from 'luxon'; // Asegúrate de tener esta dependencia instalada
import { DatePickerModal } from '../../../components/date-picker-modal/date-picker-modal.component';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: false,
})
export class SignUpPage implements OnInit {
  //implementación del authservices
  user: User = { email: '', password: '' };
  additionalData = { nombre: '', apellido: '', ciudad: '' };
  errorMessage: string = ''; // Para mostrar mensajes de error
  

  fechaNacimiento: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  errors = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };


  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController,
    public authService: AuthService, private router: Router //Nueva implementación del authservices
  ) {
    this.initializePlatformSettings();
  }

  //implementación del authservices
  async onSignUp() {
    try {
      // Verifica primero si el correo ya está registrado
      const isRegistered = await this.authService.isEmailRegistered(
        this.user.email
      );
      if (isRegistered) {
        this.errorMessage =
          'El correo electrónico ya está registrado. Por favor, use otro correo o inicie sesión.';
        return;
      }

      // Si no está registrado, procede con el registro
      await this.authService.signUp(this.user, this.additionalData);
      this.router.navigate(['/home']);
    } catch (error: unknown) {
      console.error('Error en el registro:', error);

      // Manejo específico para diferentes tipos de errores de Firebase
      if (error instanceof Error) {
        if (error.message.includes('auth/email-already-in-use')) {
          this.errorMessage =
            'Este correo electrónico ya está en uso. Por favor, use otro correo o inicie sesión.';
        } else if (error.message.includes('auth/weak-password')) {
          this.errorMessage =
            'La contraseña es demasiado débil. Use al menos 6 caracteres.';
        } else if (error.message.includes('auth/invalid-email')) {
          this.errorMessage = 'El formato del correo electrónico es inválido.';
        } else {
          this.errorMessage = error.message || 'Ocurrió un error desconocido';
        }
      } else {
        this.errorMessage = 'Ocurrió un error desconocido';
      }
    }
  }









  ngOnInit() {
    // Cualquier inicialización adicional puede ir aquí
  }



  private initializePlatformSettings() {
    // You can add platform-specific initializations here
    if (this.platform.is('ios')) {
      // iOS-specific adjustments
      document.documentElement.style.setProperty('--keyboard-offset', '20px');
    } else if (this.platform.is('android')) {
      // Android-specific adjustments
      document.documentElement.style.setProperty('--keyboard-offset', '0px');
    }
  }



 
  validateDateFormat() {
    // Validar que la fecha tenga el formato correcto YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(this.fechaNacimiento)) {
      return false;
    }
    
    // Validar que sea una fecha válida
    const [year, month, day] = this.fechaNacimiento.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && 
           date.getMonth() === month - 1 && 
           date.getDate() === day;
  }

  validateNumberInput(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }



  resetErrors() {
    this.errors = { username: '', email: '', password: '', confirmPassword: '' };
    this.errorMessage = '';
  }
    
  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    } else if (field === 'confirmPassword') {
      this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
    }
  }

  

  
}