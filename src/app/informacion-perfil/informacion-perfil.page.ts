import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.page.html',
  styleUrls: ['./informacion-perfil.page.scss'],
  standalone: false
})
export class InformacionPerfilPage implements OnInit {
  profileData: any = {};

  constructor(
    private navCtrl: NavController,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    // Cargar datos del perfil
    this.loadProfileData();
  }

  ionViewWillEnter() {
    // Actualizar los datos cada vez que la página se vuelve a mostrar
    this.loadProfileData();
  }

  loadProfileData() {
    // Obtener datos del servicio
    this.profileData = this.profileService.getProfileData();
  }
  
  goToEditProfile() {
    // Navegar a la página de edición
    this.navCtrl.navigateForward('/editar-perfil');
  }
  
  
}

