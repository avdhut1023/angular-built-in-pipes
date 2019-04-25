import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  todayDate: Date= new Date();
  a: number = 134.23;
  b: number = 34.234444;
    collection: string[] = ['a', 'b', 'c', 'd'];
 pi: number = 3.14;
  e: number = 2.718281828459045;
}
