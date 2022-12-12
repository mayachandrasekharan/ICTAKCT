import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincurriculumComponent } from './admincurriculum.component';

describe('AdmincurriculumComponent', () => {
  let component: AdmincurriculumComponent;
  let fixture: ComponentFixture<AdmincurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
