import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: String = '';
  password: String = '';

  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log('email: ', this.email);
    console.log('Contraseña: ', this.password);

    console.log(form.value);

    console.log('valid: ', form.valid);

    if(!form.valid){
      console.log('Todos los campos son requeridos');
      return; //Detiene la ejecución de la función login si el formulario no es válido
    }

    console.log('Formulario válido, procesando...'); //Continua con la ejecución del formulario
    //Aqui se procesan los datos del formulario

    if(this.email == 'Admin' && this.password == 'Admin'){
      this.navController.navigateForward('/home');
      console.log('El correo y la contraseña son correctos');
    } else {
      console.log('El correo y la contraseña son incorrectos');
    }

  }

}
