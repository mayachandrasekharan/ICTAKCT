import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastcurriculumComponent } from './pastcurriculum.component';

describe('PastcurriculumComponent', () => {
  let component: PastcurriculumComponent;
  let fixture: ComponentFixture<PastcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastcurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
