import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
public text: string = 'exercice1 interpolation';
public tooltip: string = 'mon Paragraphe';
  constructor() { }

  ngOnInit(): void {
  }

public changeColor(event: any): void {
console.log(event);
  event.target.style.backgroundColor = 'red';
}
}

