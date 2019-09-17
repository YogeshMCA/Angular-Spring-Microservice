import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalExceptionComponent } from './global-exception.component';

describe('GlobalExceptionComponent', () => {
  let component: GlobalExceptionComponent;
  let fixture: ComponentFixture<GlobalExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
