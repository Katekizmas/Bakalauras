import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaptazodisComponent } from './slaptazodis.component';

describe('SlaptazodisComponent', () => {
  let component: SlaptazodisComponent;
  let fixture: ComponentFixture<SlaptazodisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaptazodisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaptazodisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
