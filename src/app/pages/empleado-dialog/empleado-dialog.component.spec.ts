import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDialogComponent } from './empleado-dialog.component';

describe('EmpleadoDialogComponent', () => {
  let component: EmpleadoDialogComponent;
  let fixture: ComponentFixture<EmpleadoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoDialogComponent]
    });
    fixture = TestBed.createComponent(EmpleadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
