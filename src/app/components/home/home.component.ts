import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';
import { stringify } from '@angular/core/src/util';
import { Observable, Subscriber, Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public a: number;
  public b: number;
  public date: Date;
  public collection: string[];
  public time;

  constructor() { }

  ngOnInit() {
    this.a = 0.259;
    this.b = 1.3495;
    this.date = new Date();
    this.collection = [] =['a','b','c','d'];
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
