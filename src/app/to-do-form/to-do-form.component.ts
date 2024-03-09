import { Component } from '@angular/core';
import { ToDo } from '../Models/to-do.models';
import { ToDosService } from '../to-dos.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})

export class ToDoFormComponent {
  id: number = 1;
  task: string = "";
  status: boolean | null = null;
  statuss: boolean | null = null;

  constructor(public toDosService: ToDosService) { }
  setStatus(value: boolean) {
    this.statuss = value;
    console.log(this.statuss);
  }

  addTask(form: NgForm): void {

    if (!form.valid) alert("form is not valid")
    else {
      if (this.statuss === true) {
        this.status = true
      } else {
        this.status = false
      }
      console.log(this.status)

      let toDo = new ToDo(this.id, form.value.task, this.status);
      console.log(toDo)

      this.toDosService.addToDo(toDo).subscribe(res => {
        this.toDosService.getToDos().subscribe(data => {
          this.toDosService.toDoList = data;
        }
        );
      }
      );
      this.id++;
      this.task = "";
      this.status = null;
      this.statuss = null;

    }
  }

}
function stringToBoolean(status: any): string {
  throw new Error('Function not implemented.');
}

