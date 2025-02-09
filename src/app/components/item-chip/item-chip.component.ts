import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-chip',
  templateUrl: './item-chip.component.html',
  styleUrls: ['./item-chip.component.scss'],
  standalone: false,
})
export class ItemChipComponent  implements OnInit {

  @Input() chipUrl: string = '';
  @Input() categoria: string = '';
  @Input() chipColor: string = '#f1ccc3'; // Color por defecto
  @Input() textColor: string = '#ffffff'; // Color del texto por defecto

  constructor() { }

  ngOnInit() {}

}
