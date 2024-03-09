import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ToDosService } from './to-dos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ToDoListTest';

  constructor(public toDosService: ToDosService) {

  }

  ngOnInit(): void {
    this.toDosService.getToDos().subscribe(data => {
      this.toDosService.toDoList = data;
    }
    );
  }
}
