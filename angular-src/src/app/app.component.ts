import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<any> = [];

  constructor(){
    this.items = [
      // { name: 'assets/Armour.jpg'},
      // { name: 'assets/pahawang.jpg'},
      // { name: 'assets/Armour.jpg'},
      // { name: 'assets/pahawang.jpg'},
      // { name: 'assets/Armour.jpg'},
      // { name: 'assets/pahawang.jpg'},
      // { name: 'assets/Armour.jpg'},
      // { name: 'assets/pahawang.jpg'},
   
      {name: 'Slide 2'},
      {name: 'Slide 3'},
      {name: 'Slide 4'},
      {name: 'Slide 5'},
      {name: 'Slide 6'},
      {name: 'Slide 7'},
      {name: 'Slide 8'},
    ];
  }
}
