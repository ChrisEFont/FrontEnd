import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcursosComponent } from './editcursos.component';

describe('EditcursosComponent', () => {
  let component: EditcursosComponent;
  let fixture: ComponentFixture<EditcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
