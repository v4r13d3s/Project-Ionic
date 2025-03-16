import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  phone: string = '';
  birthDate: string = '';
  password: string = '';
  confirmPassword: string = '';

  nameInvalid: boolean = false;
  emailInvalid: boolean = false;
  phoneInvalid: boolean = false;
  birthDateInvalid: boolean = false;
  passwordInvalid: boolean = false;
  confirmPasswordInvalid: boolean = false;

  nameTouched: boolean = false;
  emailTouched: boolean = false;
  phoneTouched: boolean = false;
  birthDateTouched: boolean = false;
  passwordTouched: boolean = false;
  confirmPasswordTouched: boolean = false;

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(private alertCtrl: AlertController) {}

  validateFields() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^[0-9]{10}$/;

    this.emailInvalid = !emailPattern.test(this.email);
    this.phoneInvalid = !phonePattern.test(this.phone);
    this.birthDateInvalid = this.birthDate.trim().length === 0;
    this.passwordInvalid = this.password.length < 6;
    this.confirmPasswordInvalid = this.password !== this.confirmPassword;
    this.nameInvalid = this.name.trim().length === 0;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onFieldBlur(field: string) {
    if (field === 'name') this.nameTouched = true;
    if (field === 'email') this.emailTouched = true;
    if (field === 'phone') this.phoneTouched = true;
    if (field === 'birthDate') this.birthDateTouched = true;
    if (field === 'password') this.passwordTouched = true;
    if (field === 'confirmPassword') this.confirmPasswordTouched = true;

    this.validateFields();
  }

  onFieldInput(field: string) {
    if (field === 'email') {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      this.emailInvalid = !emailPattern.test(this.email);
    }

    if (field === 'phone') {
      const phonePattern = /^[0-9]{10}$/;
      this.phoneInvalid = !phonePattern.test(this.phone);
    }

    if (field === 'birthDate') {
      this.birthDateInvalid = this.birthDate.trim().length === 0;
    }

    if (field === 'password') {
      this.passwordInvalid = this.password.length < 6;
    }

    if (field === 'confirmPassword') {
      this.confirmPasswordInvalid = this.password !== this.confirmPassword;
    }

    if (field === 'name') {
      this.nameInvalid = this.name.trim().length === 0;
    }
  }

  async onRegister() {
    this.validateFields();

    if (
      this.emailInvalid || this.phoneInvalid || this.birthDateInvalid ||
      this.passwordInvalid || this.confirmPasswordInvalid || this.nameInvalid
    ) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, revisa los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Bienvenido',
      message: 'Te has registrado correctamente.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
