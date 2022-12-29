import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  counterValue : number = 0;

  resetCounter = () => {
    this.counterValue = 0;
  };
  
  incrementCounter = () => {
    this.counterValue = this.counterValue + 1;
  };
  
  decrementCounter = () => {
    if(this.counterValue == 0)
      return;

    this.counterValue = this.counterValue - 1;
  };
}