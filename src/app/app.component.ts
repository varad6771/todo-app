import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray = []

  addTodo(value1) {
    console.log("insert item")
    this.todoArray.push(value1);
    console.log(this.todoArray)
  }
  deleteItem(value) {
    console.log("delete item")
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (value == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }
}
