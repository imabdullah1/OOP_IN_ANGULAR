import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  ngOnInit() {}

  Eat() {
    console.log('Sleeping');
  }

  Sleep() {
    console.log('eating');
  }
}
