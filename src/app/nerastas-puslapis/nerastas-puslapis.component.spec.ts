import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerastasPuslapisComponent } from './nerastas-puslapis.component';

describe('NerastasPuslapisComponent', () => {
  let component: NerastasPuslapisComponent;
  let fixture: ComponentFixture<NerastasPuslapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerastasPuslapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerastasPuslapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
