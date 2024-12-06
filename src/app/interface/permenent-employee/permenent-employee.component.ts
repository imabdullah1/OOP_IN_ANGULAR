import { Component } from '@angular/core';
import { Role } from '../role';

@Component({
  selector: 'app-permenent-employee',
  templateUrl: './permenent-employee.component.html',
  styleUrls: ['./permenent-employee.component.css'],
})
export class PermenentEmployeeComponent implements Role {
  Role(): void {
    console.log('LEAD');
  }
}
