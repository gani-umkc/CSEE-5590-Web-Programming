import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListApp';
  name='';
  fullImagePath:any = '/assets/images/delete.png';
  todolist = [];
  initText()
  {
    (<HTMLInputElement>document.getElementById("addThis")).value='';
  }
  addToList(name){
    let newItem =(<HTMLInputElement>document.getElementById("addThis")).value;
    var item =
      {
        itemName:newItem,
        done:false
      };
    this.todolist.push(item);
    this.initText();
  }

  deleteItem(item){
    var newList = [];
    for (var i=0; i<this.todolist.length;i++)
    {
      if(item.itemName != this.todolist[i].itemName){ newList.push(this.todolist[i])}
    }
    this.todolist = newList;
    this.initText();
  }
}
