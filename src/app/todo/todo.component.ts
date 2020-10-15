import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  public todoList : string[] = ['buy Ram', 'buy Harddisk', 'Buy Pendrive'];
  ngOnInit(): void {
  }

  public item = '';

  public handleInput(event: any) {
    this.item=event.target.value;
    console.log(this.item);
  }



}
