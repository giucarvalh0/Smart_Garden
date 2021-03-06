import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardCuidadorComponent } from './dashboard-cuidador.component';

describe('DashboardCuidadorComponent', () => {
  let component: DashboardCuidadorComponent;
  let fixture: ComponentFixture<DashboardCuidadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
