import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RetiradaComponent } from './retirada.component';

describe('RetiradaComponent', () => {
  let component: RetiradaComponent;
  let fixture: ComponentFixture<RetiradaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
