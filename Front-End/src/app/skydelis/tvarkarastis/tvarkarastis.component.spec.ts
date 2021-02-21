import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvarkarastisComponent } from './tvarkarastis.component';

describe('TvarkarastisComponent', () => {
  let component: TvarkarastisComponent;
  let fixture: ComponentFixture<TvarkarastisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvarkarastisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvarkarastisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
