import { Component } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent extends AnimalComponent {
  Cat() {
    console.log('Meaow');
  }
}

let cat = new CatComponent();

cat.Cat();
cat.Eat();
cat.Sleep();
