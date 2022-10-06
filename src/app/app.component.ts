import { Component, VERSION } from '@angular/core';
import { Todolist } from './todolist.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  newElement = {
    description: '',
    priority: 1
  }
  todoListArray: Todolist[] = []

  addElement() {
    this.todoListArray.push(this.newElement);
    this.newElement = {
      description: '',
      priority: 1
    };
  }

  terminateElement(index: number) {
    this.todoListArray.splice(index, 1);
  }
}
