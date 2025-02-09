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
  @Input() chipColor: string = ''; 
  @Input() textColor: string = ''; 

  constructor() { }

  ngOnInit() {}

}
