import { Injectable } from '@angular/core';
import { ToDo } from './Models/to-do.models';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  public toDos: ToDo[] = [];

  constructor(private http: HttpClient) { }

  addToDo(toDo: ToDo): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>("https://localhost:7166/api/ToDo/Save_task", toDo, httpOptions);
  }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>("https://localhost:7166/api/ToDo/get_tasks")
  }

  updateStatus(toDo: ToDo): Observable<any> {
    console.log("updateStatus was called")
    console.log(toDo)

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.put<any>("https://localhost:7166/api/ToDo/Done_task", toDo, httpOptions);

  }
  updateToDo(toDo: ToDo): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.put<any>("https://localhost:7166/api/ToDo/Update_task", toDo, httpOptions);

  }
  deleteToDo(toDo: ToDo): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.delete<any>("https://localhost:7166/api/ToDo/Delete_task?id=" + toDo.id, httpOptions);
  }

  get toDoList(): ToDo[] {
    return this.toDos;
  }
  set toDoList(list: ToDo[]) {
    this.toDos = list;
  }
  get doneToDos(): ToDo[] {
    return this.toDos.filter(todo => todo.status);
  }

  get undoneToDos(): ToDo[] {
    return this.toDos.filter(todo => !todo.status);
  }

}