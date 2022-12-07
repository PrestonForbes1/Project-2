import { Component } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  name: string = '';
  date: string = '';

  toDoList: any = [];


  addToDoTask(): void {

    const newToDoItem: Card = new Card(this.name, this.date);

    this.toDoList.push(newToDoItem);
  }
  
  // removeToDoTask(): void {
  //   this.toDoList.
  // }
}
