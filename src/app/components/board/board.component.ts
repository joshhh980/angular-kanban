import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  users = [
    {
      name: "User",
      avatar: "/assets/avatar.jpg", 
    },
    {
      name: "User",
      avatar: "/assets/avatar.jpg", 
    },
  ]

  tasks: ITask[] = [
    {
      title: "Design Website",
      category: "todo",
      tags: ["Design", "HTML"],
      users: this.users
    },
    {
      title: "Implement Authentication",
      category: "todo",
      tags: ["Development"],
      users: this.users,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
