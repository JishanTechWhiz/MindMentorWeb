import { Component, OnInit } from '@angular/core';
// declare const myTest: any;
//  declare const myNav: any;
declare const myDemo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myCop';

  
  ngOnInit(): void {
    myDemo();
    // myNav();
    
  }
}
