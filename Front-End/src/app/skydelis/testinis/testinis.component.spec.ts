import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestinisComponent } from './testinis.component';

describe('TestinisComponent', () => {
  let component: TestinisComponent;
  let fixture: ComponentFixture<TestinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestinisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
