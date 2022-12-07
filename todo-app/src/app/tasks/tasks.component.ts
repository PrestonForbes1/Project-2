import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Card } from ''
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  name: string = '';
  date: string '';

  todoList: any = [];



  addToDoTask(): void {

    const newToDoItem: Card = new CardComponent(this.nameToDo, this.date);

    this.todoList.push(newToDoItem)
  }

}
