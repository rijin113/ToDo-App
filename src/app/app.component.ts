import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Welcome to your todo list!";
  todo = [
    {
      text: 'Buy vegetables quickly', 
      progress: true
    },
    {
      text: 'Wash the dishes by 7 pm', 
      progress: false
    },
    {
      text: 'Complete Homework',
      progress: true
    },

    {
      text: 'Read Book for 30 mins', 
      progress: false
    },

  ];
  init_todo(new_add) {
    var newTodo = {
      text: new_add,
      progress: false
    };
    this.todo.push(newTodo);

  }
  remove(index) {
    for (var i=0; i<this.todo.length;i++){
      if (this.todo[i].text == index){
        this.todo.splice(i,1);
      }

    }
  }
  complete(completed_item) {
    for (var j=0; j<this.todo.length;j++){
      if (this.todo[j].text == completed_item){
        this.todo[j].progress = true;
        
      }

    }
    
  }

}