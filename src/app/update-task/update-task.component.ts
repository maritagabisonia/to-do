import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDosService } from '../to-dos.service';
import { NgForm } from '@angular/forms';
import { ToDo } from '../Models/to-do.models';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  id: number = 0;
  updated: string | null = "";
  status: boolean | null = null;
  statuss: boolean | null = null;

  constructor(private toDosService: ToDosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const statusString = this.route.snapshot.paramMap.get('status');
    const updatedString = this.route.snapshot.paramMap.get('task');
    const parsedId = idString ? parseInt(idString) : 0;
    this.id = parsedId;
    this.updated = updatedString;

    if (statusString == "true") {
      this.statuss = true;
    } else {
      this.statuss = false;
    }

  }
  setStatus(value: boolean, event: Event) {
    event.preventDefault();
    this.statuss = value;
    console.log(this.statuss);
  }

  updateTask(form: NgForm): void {
    if (this.statuss === true) {
      this.status = true
    } else {
      this.status = false
    }
    console.log(this.status);

    if (!form.valid) alert("form is not valid")
    else {
      let toDo = new ToDo(this.id, form.value.updated, this.status);
      console.log(toDo)
      this.toDosService.updateToDo(toDo).subscribe(res => {

        this.toDosService.getToDos().subscribe(data => {
          this.toDosService.toDoList = data;
        }
        );
      }
      );
    }
  }
}
