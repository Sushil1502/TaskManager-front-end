import { Component, OnInit } from '@angular/core';

import { ITask } from '../task';
import { TaskServiceService } from '../task-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  // selector: 'pm-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  pageTitle = 'Task List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTasks = this.listFilter ? this.performFilter(this.listFilter) : this.tasks;
  }

  filteredTasks: ITask[] = [];
  tasks: ITask[] = [];

  constructor(private taskServices: TaskServiceService) { }

  performFilter(filterBy: string): ITask[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tasks.filter((product: ITask) =>
      product.Task.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.taskServices.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
      },
      error => this.errorMessage = <any>error
    );
  }

}
