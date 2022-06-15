import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosPerdidosComponentComponent } from './objetos-perdidos-component.component';

describe('ObjetosPerdidosComponentComponent', () => {
  let component: ObjetosPerdidosComponentComponent;
  let fixture: ComponentFixture<ObjetosPerdidosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetosPerdidosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetosPerdidosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
