import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookInfoComponent } from './textbook-info.component';

describe('TextbookInfoComponent', () => {
  let component: TextbookInfoComponent;
  let fixture: ComponentFixture<TextbookInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
