import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcursosComponent } from './newcursos.component';

describe('NewcursosComponent', () => {
  let component: NewcursosComponent;
  let fixture: ComponentFixture<NewcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
