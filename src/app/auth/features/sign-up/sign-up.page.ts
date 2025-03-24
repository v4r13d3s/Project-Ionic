import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AlertController, ModalController } from '@ionic/angular';
import { DateTime } from 'luxon'; // Asegúrate de tener esta dependencia instalada
import { DatePickerModal } from '../../../components/date-picker-modal/date-picker-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: false,
})
export class SignUpPage implements OnInit {
  fechaNacimiento: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  errorMessage: string = '';
  errors = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };


  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    this.initializePlatformSettings();
  }

  ngOnInit() {
    // Cualquier inicialización adicional puede ir aquí
  }

  // Mostrar placeholder de la fecha de nacimiento
  mostrarPlaceholder() {
    if (this.fechaNacimiento === '') {
      this.fechaNacimiento = 'aaaa-mm-dd';
    }
  }

  // Agrega los guiones en el input de fecha de nacimiento en formato año-mes-día
  manejarEntrada(event: any) {
    let valor = event.target.value;

    // Remover cualquier carácter que no sea un número
    let soloNumeros = valor.replace(/\D/g, '');

    // Mantener los guiones y rellenar los espacios con los números ingresados
    let formateado = '    -  -  '.split('');

    for (let i = 0; i < soloNumeros.length && i < 8; i++) {
      // Año (primeros 4 dígitos)
      if (i < 4) {
        formateado[i] = soloNumeros[i];
      } 
      // Mes (siguientes 2 dígitos)
      else if (i < 6) {
        formateado[i + 1] = soloNumeros[i];
      } 
      // Día (últimos 2 dígitos)
      else {
        formateado[i + 2] = soloNumeros[i];
      }
    }

    // Convertimos el array a un string
    this.fechaNacimiento = formateado.join('');
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

  // Validar si la fecha tiene un formato válido
  isValidDate(dateString: string): boolean {
    if (!dateString) return false;
    
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  async openDatePicker() {
    const modal = await this.modalController.create({
      component: DatePickerModal,
      componentProps: {
        initialDate: this.isValidDate(this.fechaNacimiento) ? this.fechaNacimiento : '2025-03-13',
        format: 'YYYY-MM-DD'
      },
      cssClass: 'date-picker-modal'
    });

    await modal.present();

    // Recibir la fecha seleccionada
    const { data } = await modal.onDidDismiss();
    
    // Actualizar el campo de fecha de nacimiento si se seleccionó una fecha
    if (data && data.date) {
      // Si el componente DatePickerModal ya devuelve la fecha formateada, usamos directamente
      if (typeof data.date === 'string' && this.isValidDate(data.date)) {
        this.fechaNacimiento = data.date;
      } else {
        // De lo contrario, formateamos la fecha como YYYY-MM-DD
        const selectedDate = new Date(data.date);
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        this.fechaNacimiento = `${year}-${month}-${day}`;
      }
      console.log('Fecha seleccionada:', this.fechaNacimiento);
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

  async register() {
    // Validación de la fecha antes de enviar
    if (!this.validateDateFormat()) {
      console.error('Formato de fecha inválido');
      return;
    }
    
    console.log('Registration form submitted');
    console.log('Fecha de nacimiento:', this.fechaNacimiento);


    this.resetErrors();
    let valid = true;

    if (!this.username) {
      this.errors.username = 'El nombre de usuario es obligatorio.';
      valid = false;
    }

    if (!this.email) {
      this.errors.email = 'El correo electrónico es obligatorio.';
      valid = false;
    }

    if (!this.password) {
      this.errors.password = 'La contraseña es obligatoria.';
      valid = false;
    }

    if (!this.confirmPassword) {
      this.errors.confirmPassword = 'Debe confirmar su contraseña.';
      valid = false;
    } else if (this.password !== this.confirmPassword) {
      this.errors.confirmPassword = 'Las contraseñas no coinciden.';
      valid = false;
    }

    if (!valid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Su cuenta ha sido creada exitosamente.',
      buttons: ['OK'],
    });

    await alert.present();

    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
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