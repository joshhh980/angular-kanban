import { Component, OnInit } from '@angular/core';
import { designWebsite, implementAuth, productDesign, task, User1 } from 'src/app/data';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  tasks: ITask[] = [
    designWebsite,
    productDesign,
    implementAuth,
    task({
      ...implementAuth,
      title: "Bootstrap Backend",
      tags: ["Development"],
      users: [User1]
    }),
    task({
      ...productDesign,
      tags: ["Design", "Done"],
      category: "done",
    }),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
