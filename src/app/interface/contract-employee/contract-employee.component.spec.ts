import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractEmployeeComponent } from './contract-employee.component';

describe('ContractEmployeeComponent', () => {
  let component: ContractEmployeeComponent;
  let fixture: ComponentFixture<ContractEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractEmployeeComponent]
    });
    fixture = TestBed.createComponent(ContractEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
