import { Component } from '@angular/core';
import { Role } from '../role';

@Component({
  selector: 'app-contract-employee',
  templateUrl: './contract-employee.component.html',
  styleUrls: ['./contract-employee.component.css'],
})
export class ContractEmployeeComponent implements Role {
  Role(): void {
    console.log('Developer');
  }
}
