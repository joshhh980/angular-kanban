import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  tasks!: ITask[];

  @Input()
  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
