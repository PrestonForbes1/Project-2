import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })


  constructor(
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
    addTask() {
      const value = this.newTodoForm.value.todoItem
      this.taskList.push( {id: this.taskList.length, name: value} )
      this.newTodoForm.reset();
    }

  }
