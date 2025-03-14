import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './components/todo_item/TodoItem';
import { TodoList } from './components/todo_list/TodoList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
  list = new TodoList("Pedro", [new TodoItem('Estudar Grafos', true), new TodoItem('Estudar TC')])
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
