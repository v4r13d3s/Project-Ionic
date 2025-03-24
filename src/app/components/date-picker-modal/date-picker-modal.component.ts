import { Component, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-picker-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Seleccionar Fecha</ion-title>
        <ion-buttons slot="end">
          <ion-button color="medium" (click)="dismiss()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-datetime
        #dateTimeInput
        presentation="date"
        [value]="initialDate"
        [preferWheel]="true"
        showDefaultButtons="false"
        locale="es-ES">
      </ion-datetime>
      
      <div class="button-container">
        <ion-button expand="block" color="primary" (click)="acceptDate()">
          Aceptar
        </ion-button>
      </div>
    </ion-content>
  `,
  styles: [`
    ion-datetime {
      width: 100%;
      margin-bottom: 16px;
    }
    
    .button-container {
      padding: 0 8px;
      margin-top: 16px;
    }
    
    ion-button {
      --border-radius: 8px;
      font-weight: 500;
      height: 48px;
    }
    
    ion-toolbar {
      --background: var(--ion-color-light);
    }
    
    ion-header ion-button {
      font-size: 16px;
    }
  `],
  standalone: false,
})
export class DatePickerModal {
  @Input() initialDate: string = '';
  @Input() format: string = 'YYYY-MM-DD';
  @ViewChild('dateTimeInput') dateTimeInput: any;
  
  constructor(private modalController: ModalController) {}
  
  acceptDate() {
    // Obtiene el valor actual del datetime picker
    const selectedDateIsoString = this.dateTimeInput.value;
    
    if (selectedDateIsoString) {
      // Convertir el string ISO a un objeto Date
      const selectedDate = new Date(selectedDateIsoString);
      
      // Formatear la fecha en el formato deseado YYYY-MM-DD
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      
      const formattedDate = `${year}-${month}-${day}`;
      
      // Enviar la fecha formateada al componente padre
      this.dismiss(formattedDate);
    } else {
      // Si no hay fecha seleccionada, simplemente cerrar
      this.dismiss();
    }
  }
  
  dismiss(date?: string) {
    this.modalController.dismiss({
      date: date
    });
  }
}