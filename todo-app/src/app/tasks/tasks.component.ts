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
  showEditCompletedTaskInput: boolean = false;
  
  
  toDoList: any = [];
  completedToDoList: any = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
    isCompleted: false,
    showEditActiveTaskInput: false
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  addToDoTask(): void {
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
    this.completedToDoList.splice(i, 1);
  }

  editActiveTask(i: any): void {
    this.toDoList[i].showEditActiveTaskInput = !this.toDoList[i].showEditActiveTaskInput;
  }

  editCompletedTask(value: any, i: any): void {
    this.completedToDoList.splice(this.completedToDoList.indexOf(value), 1, value);
    this.toDoList[i].showEditCompletedTaskInput = !this.toDoList[i].showEditCompletedTaskInput;
  }
  showCompletedTaskInput(i: any): void {
    this.toDoList[i].showEditCompletedTaskInput = !this.toDoList[i].showEditCompletedTaskInput;
  }
}
