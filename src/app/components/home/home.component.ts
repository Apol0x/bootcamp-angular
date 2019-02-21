import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public a: number;
  public b: number;

  constructor() { }

  ngOnInit() {
    this.a = 0.259;
    this.b = 1.3495;
  }

}
