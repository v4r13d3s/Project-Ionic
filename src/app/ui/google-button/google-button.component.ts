import { Component, OnInit, output } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClick = output<void>();
}
