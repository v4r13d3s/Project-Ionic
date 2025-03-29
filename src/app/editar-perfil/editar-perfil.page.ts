import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController, IonicSlides } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  standalone: false
})
export class EditarPerfilPage implements OnInit {
  @ViewChild('genderSwiper') genderSwiper: any; // Referencia al Swiper

  profileData: any = {};
  
  // Configuración de Swiper
  slideOpts = {
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 10,
    modules: [IonicSlides], // Integración con Ionic
  };

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private profileService: ProfileService,
  ) {}

  ngOnInit() {
    this.profileData = { ...this.profileService.getProfileData() };
    if (!this.profileData.gender) {
      this.profileData.gender = 'No especificado';
    }
  }

  // Posiciona el slide según el género actual
  ngAfterViewInit() {
    setTimeout(() => {
      const genders = ['No especificado', 'Masculino', 'Femenino'];
      const index = genders.indexOf(this.profileData.gender);
      if (index > -1 && this.genderSwiper?.swiper) {
        this.genderSwiper.swiper.slideTo(index);
      }
    }, 300);
  }

  // Actualiza el género cuando cambia el slide
  onSlideChange() {
    if (this.genderSwiper?.swiper) {
      const index = this.genderSwiper.swiper.activeIndex;
      const genders = ['No especificado', 'Masculino', 'Femenino'];
      this.profileData.gender = genders[index];
    }
  }

  async saveChanges() {
    this.profileService.updateProfileData(this.profileData);
    const toast = await this.toastController.create({
      message: 'Perfil actualizado correctamente',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    await toast.present();
    this.navCtrl.navigateBack('/profile');
  }
}