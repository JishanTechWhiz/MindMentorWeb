import { Component, OnInit } from '@angular/core';
declare const myDemo: any;
// declare const myTest: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component2.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    myDemo();
    // myTest();
  }
  

}
