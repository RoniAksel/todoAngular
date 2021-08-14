import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter(); 
  title: string;
  body: string;
  error: string = "Form is missing required details"; 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.title) {
      return console.log(this.error); 
    }
    if (!this.body) {
      return console.log(this.error); 
    }
    const newTask = {
      title: this.title,
      body: this.body
    }

    this.onAddTask.emit(newTask);
    
    this.title = ''
    this.body = ''
  }

}
