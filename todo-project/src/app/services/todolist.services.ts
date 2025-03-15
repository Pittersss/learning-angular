import { TodoItemService } from "./todoitem.services";

export class TodoListService
{
    constructor(public user: string, private todoItems: TodoItemService [] = [])
    {

    }

    get items() : readonly TodoItemService[]
    {
        return this.todoItems;
    }

    addItem(task: string)
    {
        this.todoItems.push(new TodoItemService(task));
    }
}