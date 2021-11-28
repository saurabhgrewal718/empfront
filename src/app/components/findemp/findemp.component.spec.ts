import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindempComponent } from './findemp.component';

describe('FindempComponent', () => {
  let component: FindempComponent;
  let fixture: ComponentFixture<FindempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
