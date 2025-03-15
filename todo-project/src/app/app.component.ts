import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemService } from './services/todoitem.services';
import { TodoListService } from './services/todolist.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
  list = new TodoListService("Pedro", [new TodoItemService('Estudar Grafos', true), new TodoItemService('Estudar TC')])
  get username()
  {
    return this.list.user
  }
  get itemCount() 
  {
    return this.list.items
    .filter(item => !item.done).length;
  }
  get tasks()
  {
    let my_tasks = ""
    for(var i = 0; i < this.list.items.length; i++)
    {
      if(i != this.list.items.length-1)
      {
        my_tasks += this.list.items[i].task + ", "
      }
      else{
        my_tasks += this.list.items[i].task
      }
      
    }
    return my_tasks
    
  }
}
