import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardClienteComponent } from './dashboard-cliente.component';

describe('DashboardClienteComponent', () => {
  let component: DashboardClienteComponent;
  let fixture: ComponentFixture<DashboardClienteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
