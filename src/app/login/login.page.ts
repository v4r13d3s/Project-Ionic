import { Component } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage {
  email: string = '';
  password: string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;
  passwordVisible: boolean = false;
  isLoading: boolean = false;

  emailTouched: boolean = false;
  passwordTouched: boolean = false;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {}

  validateFields() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.emailInvalid = !emailPattern.test(this.email);
    this.passwordInvalid = this.password.length < 6;
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible; 
  }

  onFieldBlur(field: string) {
    if (field === 'email') {
      this.emailTouched = true;
    }
    if (field === 'password') {
      this.passwordTouched = true;
    }
    this.validateFields();
  }

  async onLogin() {
    if (this.isLoading) return;
    this.isLoading = true;
  
    this.validateFields();
  
    if (this.emailInvalid || this.passwordInvalid) {
      const form = document.querySelector('.form-container');
      form?.classList.add('shake');
  
      setTimeout(() => form?.classList.remove('shake'), 300);
  
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, revisa los campos.',
        buttons: ['OK'],
      });
      await alert.present();
  
      this.isLoading = false;
      return;
    }
  
    // Simulación de inicio de sesión exitoso
    setTimeout(async () => {
      const alert = await this.alertCtrl.create({
        header: 'Bienvenido',
        message: 'Has iniciado sesión correctamente.',
        buttons: ['OK'],
      });
      await alert.present();
  
      this.navCtrl.navigateForward('/home');
      this.isLoading = false;
    },
    1000); 
    if (this.email === 'emma@prueba.com' && this.password === '123456') {
      const alert = await this.alertCtrl.create({
        header: 'Bienvenido',
        message: 'Has iniciado sesión correctamente.',
        buttons: ['OK'],
      });
      await alert.present();

      this.navCtrl.navigateForward('/home');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Credenciales incorrectas.',
        buttons: ['OK'],
      });
      await alert.present();
    }

    this.isLoading = false;
  }
}