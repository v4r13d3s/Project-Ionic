import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileData = {
    name: 'v4rl3d3s',
    email: 'bariedes@gmail.com',
    phone: '2711405858',
    country: 'Veracruz',
    gender: 'Masculino',
    address: 'No especificado'
  };

  constructor() { }

  getProfileData() {
    // En un escenario real, aquí podrías obtener los datos de localStorage o de una API
    return this.profileData;
  }
  
  updateProfileData(newData: any) {
    // Actualizar datos del perfil
    this.profileData = {...newData};
    
    // En un escenario real, aquí guardarías en localStorage o harías una llamada a una API
    console.log('Perfil actualizado:', this.profileData);
  }
}
