import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermenentEmployeeComponent } from './permenent-employee.component';

describe('PermenentEmployeeComponent', () => {
  let component: PermenentEmployeeComponent;
  let fixture: ComponentFixture<PermenentEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermenentEmployeeComponent]
    });
    fixture = TestBed.createComponent(PermenentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
