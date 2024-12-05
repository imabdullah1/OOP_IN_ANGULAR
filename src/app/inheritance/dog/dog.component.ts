import { Component } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent extends AnimalComponent {
  Dog() {
    console.log('Bark');
  }
}

let dog = new DogComponent();

dog.Dog();
dog.Eat();
dog.Sleep();
