import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendStatusComponent } from './lend-status.component';

describe('LendStatusComponent', () => {
  let component: LendStatusComponent;
  let fixture: ComponentFixture<LendStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
