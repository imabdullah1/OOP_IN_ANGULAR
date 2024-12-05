import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css'],
})
export class EncapsulationComponent {
  // Employee Private Deatils Hiding (e.g) Reg_NO

  private _empID!: number;
  private _empName!: string;

  get empID() {
    return this._empID;
  }

  set empID(empID) {
    if (empID < 0) {
      console.log('Emplooyee ID not be negative number');
    } else {
      this._empID = empID;
    }
  }

  get empName() {
    return this._empName;
  }

  set empName(empName) {
    if (empName === '') {
      console.log('Please enter the valid employee name');
    } else {
      this._empName = empName;
    }
  }

  // DEF: [Encapsulation isa wrapping of data(feild) and function togather to restrict the direct access of data]
}

let obj = new EncapsulationComponent();
console.log(obj.empID());
console.log(obj.empName());
