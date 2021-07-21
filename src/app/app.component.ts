import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** First a generic component was intialized just for the app*/
export class AppComponent {
  /** An array of objects is created below  */
  title = "Welcome to your todo list!";
  todo = [
    {
      text: 'Eg. Complete Homework by 7 pm', 
      progress: false
    }
  ];
  /** on submit, the html file calls the function below where todo.text is replaced by the variable new_add
   * once called, it creates a new object with new attributes and pushes it into the array above 
   * and then in real time, it gets printed out as it gets updated in the table.
   */
  init_todo(new_add) {
    var newTodo = {
      text: new_add,
      progress: false
    };
    this.todo.push(newTodo);
/** Note "this" refers to the class. Once mentioned, we can narrow it down using todo 
 * as it is declared within the class to access the array*/
  }
  remove(index) {
    for (var i=0; i<this.todo.length;i++){
      if (this.todo[i].text == index){
        this.todo.splice(i,1);
      }
/** Once the remove button is clicked, a for loop is created that iterates through the todo array.
 * Then it tries to match (todo.text) or (index) parameter with every attribute "text" in the array.
 * Note: (todo.text) or (index) parameter is the value of text when the remove button is clicked. 
 * If the statement is carried out, then that particular index of the array is recorded and spliced/removed from the array.
*/
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
