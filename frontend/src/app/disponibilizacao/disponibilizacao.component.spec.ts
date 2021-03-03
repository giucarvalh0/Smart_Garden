import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisponibilizacaoComponent } from './disponibilizacao.component';

describe('DisponibilizacaoComponent', () => {
  let component: DisponibilizacaoComponent;
  let fixture: ComponentFixture<DisponibilizacaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
