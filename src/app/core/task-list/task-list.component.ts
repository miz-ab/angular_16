import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TaskList } from 'src/app/model/task-list.model';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements AfterViewInit, OnInit{
  
  public taskList!: TaskList[];
  dataSource!: MatTableDataSource<TaskList>;

  displayedColumns: string[] = ['id', 'title', 'task'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router: Router){}

  getTasks(){
    this.api.getTaskList()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.taskList = res;
        this.dataSource = new MatTableDataSource(this.taskList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 
      error: (err)=> {
        console.log(err);
      }
    })
  }

  editTask(id : string){

  }

  deleteTask(id : string){

  }

  
  ngOnInit(): void {
    this.getTasks();
  }

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



