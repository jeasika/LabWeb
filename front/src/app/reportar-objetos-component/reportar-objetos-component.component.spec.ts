import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarObjetosComponentComponent } from './reportar-objetos-component.component';

describe('ReportarObjetosComponentComponent', () => {
  let component: ReportarObjetosComponentComponent;
  let fixture: ComponentFixture<ReportarObjetosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarObjetosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarObjetosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
