import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultynavComponent } from './facultynav.component';

describe('FacultynavComponent', () => {
  let component: FacultynavComponent;
  let fixture: ComponentFixture<FacultynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
