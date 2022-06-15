import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQComponentComponent } from './faqcomponent.component';

describe('FAQComponentComponent', () => {
  let component: FAQComponentComponent;
  let fixture: ComponentFixture<FAQComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
