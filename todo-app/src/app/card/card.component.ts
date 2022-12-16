import { Component, Input } from '@angular/core';
import { EditService } from '../edit.service'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: any;

  constructor(private edit: EditService) {}
  
  completeTask(): void {
  }

  removeTask(): void {

  }
  editTask(): void {

  }
}
