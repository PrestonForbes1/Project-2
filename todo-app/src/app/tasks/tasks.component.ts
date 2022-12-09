import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  @Input() card: any;
  name: string = '';
  isCompleted: boolean = false;
  toDoList: any = [];
  completedToDoList: any = [];
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}


  addToDoTask(): void {

    // created Card object to potentially have more properties than name in the future
    // const newToDoItem: Card = new Card(this.name);
    // const newToDoItem: Card = new Card

    const value = this.newTodoForm.value.todoItem;
    this.toDoList.push({ name: value, id: this.toDoList.length });
    this.newTodoForm.reset();
  }

  completeActiveTask(value: any, i: any): void {
    value.isCompleted = !value.isCompleted;
    this.toDoList.push(this.toDoList.splice(this.toDoList.indexOf(value), 1)[0]);
    this.completedToDoList.push({ name: this.toDoList[i].name, id: this.completedToDoList.length });
    this.removeActiveTask(i);
  };

  removeActiveTask(i: any): void {
    this.toDoList.splice(i, 1);
  }

  removeCompletedTask(i: any): void {
    this.completedToDoList.splice(i, 1)
  }

  editActiveTask(value: any, i: any): void {
    // this.toDoList.splice()
  }

  editCompletedTask(): void {

  }
  
  
}
