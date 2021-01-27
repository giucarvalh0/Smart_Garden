import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilizacaoComponent } from './disponibilizacao.component';

describe('DisponibilizacaoComponent', () => {
  let component: DisponibilizacaoComponent;
  let fixture: ComponentFixture<DisponibilizacaoComponent>;

  beforeEach(async(() => {
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
