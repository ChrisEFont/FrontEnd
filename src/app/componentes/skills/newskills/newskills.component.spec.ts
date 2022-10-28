import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewskillsComponent } from './newskills.component';

describe('NewskillsComponent', () => {
  let component: NewskillsComponent;
  let fixture: ComponentFixture<NewskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
