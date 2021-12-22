import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecheckComponent } from './onecheck.component';

describe('OnecheckComponent', () => {
  let component: OnecheckComponent;
  let fixture: ComponentFixture<OnecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnecheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
