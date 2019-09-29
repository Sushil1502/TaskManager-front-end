import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from '../task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'pm-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  pageTitle = 'Add Task';
  errorMessage: string;
  task: ITask;

  constructor() { }

  ngOnInit() {
  }

}
