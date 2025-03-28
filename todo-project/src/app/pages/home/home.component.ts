import { Component } from "@angular/core";
import { TodoItemService } from "../../services/todoitem.services";
import { TodoListService } from '../../services/todolist.services';
import { FormControl, FormsModule } from "@angular/forms"

@Component({
    selector: 'app-home',
    imports: [FormsModule],
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent
{
      todoListControl: string = '';
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
      
      buttomClicked(event: Event)
      {
        
        this.list.addItem(this.todoListControl)
        this.todoListControl = ''
      }
}