import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task.model';
import { TaskList } from '../model/task-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = "http://localhost:3012/task";

  constructor(private http: HttpClient) { }

  postTask(task: Task){
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }

  getTaskList(){
    return this.http.get<TaskList[]>(`${this.baseUrl}`);
  }

  getTaskToEdited(id : string){
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  updateTask(id: string, updatedTask: Task) {
    return this.http.put<Task>(`${this.baseUrl}/${id}`, updatedTask);
  }

  deleteTask(id: string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
