import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';
import { ToDo } from '../Models/to-do.models';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})

export class ToDoListComponent implements OnInit {
  buttonColor: string = 'red';
  id: number = 0;

  constructor(public toDosService: ToDosService) { }

  ngOnInit() {
    this.toDosService.getToDos().subscribe(data => {
      console.log("API CALL ENDED");
      console.log(data);

      this.toDosService.toDoList = data;
    }
    );

  }


  changeStatus(toDo: ToDo): void {
    console.log("changeStatus was called")
    console.log(toDo)
    this.toDosService.updateStatus(toDo).subscribe();

  }

  deleteToDo(toDo: ToDo): void {
    this.toDosService.deleteToDo(toDo).subscribe(res => {
      this.toDosService.getToDos().subscribe(
        data => {
          this.toDosService.toDoList = data
        })
    }
    );
  }

}
